const Sequelize = require('sequelize')
const db = require('../db')

const CalorieRange = db.define('calorieRange', {
  range: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,

    }
  },
  dietType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,

      isIn: [['vegan', 'vegetarian', 'omnivore', 'pescatarian']]

    }
  },
})


module.exports = CalorieRange
