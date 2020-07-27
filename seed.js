const db = require('./server/db/db')
const {Ingredient, Relationship} = require('./server/db/models/ingredients')
const CalorieRange = require('./server/db/models/calorieRange')
const {dummyData, calorieRanges, rel} = require('./DummyData')


async function seed() {
    await db.sync({force: true})
    console.log('db synced!')
  
    await Promise.all(dummyData.map(async ingredient => await Ingredient.create(ingredient)))
    await Promise.all(calorieRanges.map(async range => await CalorieRange.create(range)))
    await Promise.all(rel.map(async re => await Relationship.create(re)))

    console.log(`seeded successfully`)
  }
  
  // We've separated the `seed` function from the `runSeed` function.
  // This way we can isolate the error handling and exit trapping.
  // The `seed` function is concerned only with modifying the database.
  
  
  // Execute the `seed` function, IF we ran this module directly (`node seed`).
  // `Async` functions always return a promise, so we can use `catch` to handle
  // any errors that might occur inside of `seed`.
 
  seed()
  // we export the seed function for testing purposes (see `./seed.spec.js`)
  module.exports = seed