const request = require('request');
const cheerio = require('cheerio');

const thongkeUri = 'https://www.minhngoc.net.vn/thong-ke-xo-so';
const selectTinh = (tinh) => ({
  baclieu: 9,
  angiang: 14,
  bentre: 7,
  binhduong: 17,
  binhphuoc: 21,
  binhthuan: 15,
  camau: 3,
  cantho: 11,
  dalat: 24,
  dongnai: 10,
  dongthap: 2,
  haugiang: 20,
  kiengiang: 23,
  longan: 19,
  soctrang: 12,
  tayninh: 13,
  tiengiang: 22,
  tphcm: 1,
  travinh: 18,
  vinhlong: 16,
  vungtau: 8,
}[tinh]);

const selectMien = (mien) => ({
  nam: 1,
  bac: 2,
  trung: 3
}[mien]);

const formatStr = str => str.replace(/\s+/g, ' ').trim();

const generateDai = (dai) => {
  return !dai
    ? ''
    : dai.split(',').map(v => `dai${v}=${v}`).join('&');
}

const analyzeMainContentLo = ($) => {
  if ($('.box_thongkexoso .bangthongke tbody tr').length === 0) {
    return [];
  }

  return $('.box_thongkexoso .bangthongke tbody tr').map((i, elem) => {
    $(elem).find('br').replaceWith('\n');
    const title = $(elem).find('td').first().text();
    return {
      ngay: title.match(/.*$/)[0],
      dai: title.replace(title.match(/.*$/)[0], '').trim(),
      giai: $(elem).find('td').last().find('div').map((j, giaiElem) => {
        const values = $(giaiElem).text().split(':');
        return {
          ten: values[0].trim(),
          ketqua: values[1].trim(),
        }
      }).get(),
    }
  }).get();
}

const analyzeSubContentGan = ($) => {
  const ganCucDai = formatStr($('.box_thongkexoso tr').eq(0).text());
  const thongTin  = formatStr($('.box_thongkexoso tr').eq(2).text());
  const ngayElem  = $('.box_thongkexoso tr').eq(1).find('td');
  const tuNgay    = ngayElem.eq(1).text().trim();
  const denNgay   = ngayElem.eq(3).text().trim();
  return { ganCucDai, thongTin, tuNgay, denNgay };
}

const analyzeSubContentTanSuat = ($) => {
  return $('.bangthongketangsuat tr').map((i, elem) => ({
    so: $(elem).find('td').eq(0).text().trim(),
    tanSuat: $(elem).find('td').eq(1).text().trim(),
  })).get();
}

const analyzeSubContent = ($, elemList) => {
  $('.box_thongkexosoext .box_tkdefault_xhn3l').last().replaceWith('');

  return $('.box_thongkexosoext .box_tkdefault_xhn3l').map((i, elem) => ({
    name: $(elem).find('.box_tkdefault_title').text().trim(),
    data: $(elem).find('tr td div a, tr td a, div a').map((i, a) => {
      let row = $(a).parent();
      if ($(row).is('td')) row = $(row).parent();
      const so = $(row).text().match(/\d+/)[0];
      const trangThai = $(row).text()
        .replace(so, '')
        .replace(')', ') ')
        .replace(/\s+/g, ' ')
        .trim();

      return {so, trangThai};
    }).get()
  })).get();
}

const pullPage = (params, cb) => {
  const isMien = params.type === 'mien';
  const paramStr = `tinh=${selectTinh(params.tinh)}
                    mien=${selectMien(params.mien)}
                    ${params.route === 'lo-to' ? 'dstk' : 'dayso'}=${params.stk}
                    tungay${isMien ? 'mn' : ''}=${params.tungay}
                    denngay${isMien ? 'mn' : ''}=${params.denngay}
                    thu=${params.thu}
                    ${generateDai(params.dai)}`

  const paramUri = '?' + paramStr.replace(/\s+/g, '&');
  const pageUrl = `${thongkeUri}/${params.route}-${params.type}.html${paramUri}`;

  request.get(pageUrl, (error, res, body) => {
    if (error || res && res.statusCode !== 200) {
      return cb(error || `error code: ${res.statusCode}`);
    }
    const $ = cheerio.load(body);
    const mainResult = params.route === 'lo-to'
                     ? analyzeMainContentLo($)
                     : params.route === 'gan-cuc-dai'
                        ? analyzeSubContentGan($)
                        : analyzeMainContentTanSuat($);
    const subResult = analyzeSubContent($);

    return cb(null, { mainResult, subResult });
  })
}

const thongKe = (req, res, next) => {
  const { params, query } = req;
  const obj = { ...params, ...query };

  pullPage(obj, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    if (Array.isArray(result.mainResult) && result.mainResult.length === 0) {
      result.message = '- Không xuất hiện dãy số này trong thời gian trên !';
    }

    return res.status(200).send(result);
  })
}


