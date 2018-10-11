const request = require('request');
const chalk = require('chalk')

module.exports = async (page = 1, limit = 8) => {
  const url = 'https://www.chasing-coins.com/api/v1/coins';

await request.get(url, (error, response, body) => {
  let payload = JSON.parse(body);
  let startAt = page * limit;

  let results = payload.slice(startAt, ((page + 1) * limit))

  results.forEach((coin) => {
    console.log(chalk.blue('Coin: '), chalk.keyword('orange')(coin))
  })
});

}
