const request = require('request');
const cheerio = require('cheerio');
const Result = require('../models/results.js');

exports.index = (req, res) => {
  console.log('startsssssssss');
  Result.find({}, (err, data) => {
    if (!err) res.json(data);
    else res.json(err);
  });
}

exports.fetch = (req, res) => {
  console.log('startsssssssss');
  const url = 'https://www.minhngoc.net.vn/';
  request(url, (error, response, html) => {
    if(!error) {
      const $ = cheerio.load(html);

      $("#noidung .box_kqxs").each((i, e) => {
        const title = $(e).find(".top .title").text();
        const [name, date] = title.split('-');
        Result.find({ title }, (err, data) => {
          if (err) console.log(err);
          else if (data.length === 0) {
            console.log('start');
            const results = { title, name, date };

            $(e).find(".content .bkqmiennam table.rightcl").each((_, table) => {
              results.location = $(table).find('.tinh').text();
              results.code = $(table).find('.matinh').text();
              const data = {};
              data.num8 = $(table).find('.giai8').text();
              data.num7 = $(table).find('.giai7').text();
              data.num5 = $(table).find('.giai5').text();
              data.num3 = [];
              data.num4 = [];
              data.num6 = [];
              $(table).find('.giai3 > div').each((i3, el) => data.num3.push($(el).text()));
              $(table).find('.giai4 > div').each((i4, el) => data.num4.push($(el).text()));
              $(table).find('.giai6 > div').each((i6, el) => data.num6.push($(el).text()));
              data.num2 = $(table).find('.giai2').text();
              data.num1 = $(table).find('.giai1').text();
              data.num0 = $(table).find('.giaidb').text();
              results.data = data;
              const createResult = new Result(results);
              createResult.save((err) => { if (err) console.log (err.toString())});
            });

            $(e).find(".content .bkqmiennam.bkqmienbac .bkqtinhmienbac tbody").each((_, table) => {
              results.location = $(table).find('.tinh').text();
              results.code = $(table).find('.matinh').text();
              const data = {};
              data.num2 = [];
              data.num3 = [];
              data.num4 = [];
              data.num5 = [];
              data.num6 = [];
              data.num7 = [];
              data.num8 = [];
              $(table).find('.giai2 > div').each((i2, el) => data.num2.push($(el).text()));
              $(table).find('.giai3 > div').each((i3, el) => data.num3.push($(el).text()));
              $(table).find('.giai4 > div').each((i4, el) => data.num4.push($(el).text()));
              $(table).find('.giai5 > div').each((i5, el) => data.num5.push($(el).text()));
              $(table).find('.giai6 > div').each((i6, el) => data.num6.push($(el).text()));
              $(table).find('.giai7 > div').each((i7, el) => data.num7.push($(el).text()));
              $(table).find('.giai8 > div').each((i8, el) => data.num8.push($(el).text()));
              data.num1 = $(table).find('.giai1').text();
              data.num0 = $(table).find('.giaidb').text();
              results.data = data;
              const createResult = new Result(results);
              createResult.save((err) => { if (err) console.log (err.toString())});
            });
          }
        });
      });
    }

    res.send('Pls checkt data in db');
  });
}
