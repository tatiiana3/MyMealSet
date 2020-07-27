const Sequelize = require('sequelize')
const db = require('../db')

const Recipes = db.define('recipes', {
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
            isIn: [['fruit', 'vegetable', 'meat', 'grains, beans, nuts', 'dairy', 'alt protein']]
        },
    }
})

module.exports = Recipes


