const ora = require('ora')
const getAllCoins = require('../utils/crypto.js')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const pageNo = args.page || args[1];

    const allCoins = await getAllCoins(pageNo)

    spinner.stop()

    console.log(`below is the list of all the coins by their aliases`);
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
