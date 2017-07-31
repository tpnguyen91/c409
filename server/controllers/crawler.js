const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');
const Result = require('../models/results.js');
const Province = require('../models/provinces.js');

exports.index = (req, res) => {
  Result.find({})
    .populate('province')
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
}

exports.fetch = (req, res) => {
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

            $(e).find(".content .bkqmiennam table.rightcl").each((_, table) => {
              const results = { title, name, date: moment(date, 'DD/MM/YYYY').toISOString() };
              const code = $(table).find('.matinh').text();
              results.end2 = [];
              results.end3 = [];
              results.num3 = [];
              results.num4 = [];
              results.num6 = [];

              results.num8 = $(table).find('.giai8').text();
              results.end2.push(results.num8);
              results.end3.push(results.num8);
              results.num7 = $(table).find('.giai7').text();
              results.end2.push(results.num7.substring(1, 3));
              results.end3.push(results.num7);
              $(table).find('.giai6 > div').each((i6, el) => {
                const current = $(el).text();
                results.num6.push(current);
                results.end2.push(current.substring(2, 4));
                results.end3.push(current.substring(1, 4));
              });

              results.num5 = $(table).find('.giai5').text();
              results.end2.push(results.num5.substring(2, 4));
              results.end3.push(results.num5.substring(1, 4));

              $(table).find('.giai4 > div').each((i6, el) => {
                const current = $(el).text();
                results.num4.push(current);
                results.end2.push(current.substring(3, 5));
                results.end3.push(current.substring(2, 5));
              });

              $(table).find('.giai3 > div').each((i6, el) => {
                const current = $(el).text();
                results.num3.push(current);
                results.end2.push(current.substring(3, 5));
                results.end3.push(current.substring(2, 5));
              });

              results.num2 = $(table).find('.giai2').text();
              results.num1 = $(table).find('.giai1').text();
              results.num0 = $(table).find('.giaidb').text();

              results.end2.push(results.num2.substring(3, 5));
              results.end3.push(results.num2.substring(2, 5));
              results.end2.push(results.num1.substring(3, 5));
              results.end3.push(results.num1.substring(2, 5));
              results.end2.push(results.num0.substring(4, 6));
              results.end3.push(results.num0.substring(3, 6));

              Province
                .findOne({ code })
                .then((p) => {
                  if (p) {
                    results.province = p._id;
                    const createResult = new Result(results);
                    createResult.save((err) => { if (err) console.log (err.toString())});
                  }
                })
            });

            $(e).find(".content .bkqmiennam.bkqmienbac .bkqtinhmienbac tbody").each((_, table) => {
              const results = { title, name, date: moment(date, 'DD/MM/YYYY').toISOString() };
              const code = $(table).find('.matinh').text();
              results.end2 = [];
              results.end3 = [];
              results.num2 = [];
              results.num3 = [];
              results.num4 = [];
              results.num5 = [];
              results.num6 = [];
              results.num7 = [];
              results.num8 = [];

              $(table).find('.giai2 > div').each((_, el) => {
                const current = $(el).text();
                results.num2.push(current);
                results.end2.push(current.substring(3, 5));
                results.end3.push(current.substring(2, 5));
              });

              $(table).find('.giai3 > div').each((_, el) => {
                const current = $(el).text();
                results.num3.push(current);
                results.end2.push(current.substring(3, 5));
                results.end3.push(current.substring(2, 5));
              });
              $(table).find('.giai4 > div').each((_, el) => {
                const current = $(el).text();
                results.num4.push(current);
                results.end2.push(current.substring(2, 4));
                results.end3.push(current.substring(1, 4));
              });
              $(table).find('.giai5 > div').each((_, el) => {
                const current = $(el).text();
                results.num5.push(current);
                results.end2.push(current.substring(2, 4));
                results.end3.push(current.substring(1, 4));
              });
              $(table).find('.giai6 > div').each((_, el) => {
                const current = $(el).text();
                results.num6.push(current);
                results.end2.push(current.substring(1, 3));
                results.end3.push(current);
              });

              results.num1 = $(table).find('.giai1').text();
              results.num0 = $(table).find('.giaidb').text();

              results.end2.push(results.num1.substring(3, 5));
              results.end3.push(results.num1.substring(2, 5));
              results.end2.push(results.num0.substring(3, 5));
              results.end3.push(results.num0.substring(2, 5));

              Province
                .findOne({ code })
                .then((res) => {
                  if (res) {
                    results.province = res._id;
                    const createResult = new Result(results);
                    createResult.save((err) => { if (err) console.log (err.toString())});
                  }
                })
            });
          }
        });
      });
    }

    res.send('Pls checkt data in db');
  });
}
