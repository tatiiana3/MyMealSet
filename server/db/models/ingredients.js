const Sequelize = require('sequelize')
const db = require('../db')
const CalorieRange = require('./calorieRange')


const Ingredient = db.define('ingredient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // servingAmount: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // },
  // calories: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   },
  // },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isIn: [['fruit', 'vegetable', 'meat', 'grains, beans, nuts', 'dairy', 'alt protein', 'fish', 'fats']]
    },
  }
})

Ingredient.belongsToMany(CalorieRange, {through: 'Range_Ingredients'})
CalorieRange.belongsToMany(Ingredient, {through: 'Range_Ingredients'})

const Relationship = db.model('Range_Ingredients');

module.exports = {
  Ingredient,
  Relationship
}
