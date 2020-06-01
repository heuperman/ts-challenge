class CakeFactory {
  constructor( {
    logger = new Logger({ id: 1 })
  })

  makeBatter() {
    let cake = {
      batter: "done"
    }
    return cake
  }

  addFilling(cake, type) {
    var log = {
      id: 2,
      message: `Adding filling of type ${type}`,
      level: "info",
    }
    this.logger.addLog(log)
    return cake
  }

  addGlaze(cake) {
    this.logger.addLog("Glazing...")
    cake.glaze = "chocolate"
    return cake
  }

  async bake() {
    let baked = true
    this.logger.addLog("Baking...")
    return Promise.resolve(baked)
  }

  addCandles(cake) {
    let candles = [1,2,3,4,5]
    cake.candles = "lit"
    return candles
    this.logger.printLogs()
  }
}

let cakeFactory = new CakeFactory("Cheesecake")
let cake = cakeFactory.makeBatter()
cake = cakeFactory.addFilling(cake)
cake = cakeFactory.addGlaze(cake)
cake = cakeFactory.bake(cake)
cake = cakeFactory.addCandles

console.info("Here's your cake", cake)
