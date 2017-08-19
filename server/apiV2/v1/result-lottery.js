const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');

class ResultLottery {
    fetch(req, res) {
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
                    const getGiai = giai => $(table).find('[class^="giai' + giai + '"] > div').map((i, item) => $(item).text()).get().join('-');
                    const item = {
                        title,
                        code,
                        giai8: getGiai(8),
                        giai7: getGiai(7),
                        giai6: getGiai(6),
                        giai5: getGiai(5),
                        giai4: getGiai(4),
                        giai3: getGiai(3),
                        giai2: getGiai(2),
                        giai1: getGiai(1),
                        giaidb: getGiai('db'),
                    };
                    temp.data.push(item);
                });
                rs.push(temp);
            });
            res.json({ success: true, result: rs });
        }});
    }

    fetchWiParams(req, res) {
        const urlDate = req.query.urlDate;
        const dateDefault = req.query.dateDefault;
        const codeProvince = req.query.codeProvince;
        const url = `https://www.minhngoc.com.vn/ket-qua-xo-so/mien-nam/${urlDate}.html`;
        let result = undefined;
        request(url, (error, response, html) => {
            if(!error) {
            const $ = cheerio.load(html);
            $("#noidung .box_kqxs").each((i, e) => {
                const title = $(e).find(".top .title").text();
                const [name, date] = title.split('-');
                if (date.trim() === `${dateDefault}`) {
                    $(e).find(".content .bkqmiennam table.rightcl").each((_, table) => {
                        const title = $(table).find('.tinh').text().replace(/(\n|\t)/g, '');
                        const code = $(table).find('.matinh').text().replace(/(\n|\t)/g, '');
                        if (code.includes(codeProvince)) {
                            const getGiai = giai => $(table).find('[class^="giai' + giai + '"] > div').map((i, item) => $(item).text()).get().join('-');
                            const item = {
                                title,
                                code,
                                date,
                                giai8: getGiai(8),
                                giai7: getGiai(7),
                                giai6: getGiai(6),
                                giai5: getGiai(5),
                                giai4: getGiai(4),
                                giai3: getGiai(3),
                                giai2: getGiai(2),
                                giai1: getGiai(1),
                                giaidb: getGiai('db'),
                            };
                            result = item;
                        }
                    });
                }
            });
            
            res.json({ success: result === undefined ? false : true, result });
        }});
    }
}

module.exports = new ResultLottery()
