const request = require('request');
const chalk = require('chalk')

module.exports = async (coin) => {
  const input = coin.toUpperCase()
  const url = `https://chasing-coins.com/api/v1/std/coin/${input}/`;

await request.get(url, (error, response, body) => {
  let result = JSON.parse(body);
console.log(chalk.blue(`${input} price:` ), chalk.keyword('orange')(result.price))
});

}
