const menus = {
  main: `
    atlas [command] <options>

    price .............. show the price of coin in USD
    all-coins .............. show all coins which accepts <options> of page
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    atlas today <options>

    --location, -l ..... the location to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
