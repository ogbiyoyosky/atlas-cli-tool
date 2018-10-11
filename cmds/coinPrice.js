const ora = require('ora');
const getCoinPrice = require('../utils/price.js');


const spinner = ora();


module.exports = async (args) => {

  try {

      const coin = args.coin || args[1];

      console.log(`below is price for ${coin}`);


const allCoins = await getCoinPrice(coin)

  } catch (err) {


    console.error(err)
  }
}
