// const $ = require('./node_modules/jquery/dist/jquery');
const https = require('https');
let results = '';
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=894b12a9c6d64f65a74a3425b92d6f2f';

const news = async () => {
    https.get(url, (resp) => {
        let data = '';
    // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
    // The whole response has been received. Print out the result.
        resp.on('end', () => {
            results = JSON.parse(data);
            const results2 = JSON.parse(data);
            // console.log(results);
            return results2;
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

exports.getNews = async (req, res) => {
    console.log(results);
    res.json(results);
};



