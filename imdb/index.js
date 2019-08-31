const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://www.imdb.com/title/tt0381707/?ref_=nv_sr_1?ref_=nv_sr_1';

(async () => {

  const res = await request(URL);

  let $ = cheerio.load(res);

  let title = $('div[class="title_wrapper"] > h1').text();
  let rating = $('div[class="ratingValue"] > strong').text();
  let rating2 = $('div.ratingValue > strong').text();
  let rating3 = $('span[itemprop="ratingValue"]').text();

  const o = {
    title,
    rating,
    rating2,
    rating3
  }
  
  console.log(o);

})()