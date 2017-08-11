const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');

exports.fetch = (req, res) => {
  const urlDate = req.params.id;
  const url = `https://www.minhngoc.com.vn/ket-qua-xo-so/mien-nam/${urlDate}.html`;
  request(url, (error, response, html) => {
    if(!error) {
      const $ = cheerio.load(html);
      const rs = [];
      $("#noidung .box_kqxs").each((i, e) => {
        const title = $(e).find(".top .title").text();
        const [name, date] = title.split('-');
         const temp = {};
         temp.date = date;
         temp.data = [];
         $(e).find(".content .bkqmiennam table.rightcl").each((_, table) => {
              // const results = { title, name, date: moment(date, 'DD/MM/YYYY').toISOString() };
              const title = $(table).find('.tinh').text().replace(/(\n|\t)/g, '');
              const code = $(table).find('.matinh').text().replace(/(\n|\t)/g, '');
              const item = {
                title,
                code,
                giai8: $(table).find('.giai8 > div').text(),
                giai7: $(table).find('.giai7 > div').text(),
                giai6: '',
                giai5: $(table).find('.giai5 > div').text(),
                giai4: '',
                giai3: '',
                giai2: $(table).find('.giai2 > div').text(),
                giai1: $(table).find('.giai1 > div').text(),
                giai0: $(table).find('.giaidb > div').text(),
              };
              // res.send($(table).find('.giai6 > div').text());
              $(table).find('.giai6 > div').each((i, el) => {
                if (i === 0) {
                  item.giai6 = item.giai6 + $(el).text();
                }else {
                  item.giai6 = item.giai6 + '-' + $(el).text();
                }
              });
              $(table).find('.giai4 > div').each((i, el) => {
                if (i === 0) {
                  item.giai4 = item.giai4 + $(el).text();
                }else {
                  item.giai4 = item.giai4 + '-' + $(el).text();
                }              
              });
              $(table).find('.giai3 > div').each((i, el) => {
                if (i === 0) {
                  item.giai3 = item.giai3 + $(el).text();
                }else {
                  item.giai3 = item.giai3 + '-' + $(el).text();
                }                   
              });
              temp.data.push(item);
          });
          rs.push(temp);
      });
      res.json({ success: true, result: rs });
  }});
}

