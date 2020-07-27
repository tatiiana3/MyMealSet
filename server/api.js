const router = require('express').Router()
const CalorieRange = require('./db/models/calorieRange')
const {Ingredient}= require('./db/models/ingredients')


function getRange(obj) {
    let calories = 0
    if (obj.sex === "male") {
        calories += 200
    }
    if (obj.age === '18-25') {
        calories = 1800
    }
    else if (obj.age === '26-30') {
        calories = 1800
    }
    else if (obj.age === '31-50') {
        calories = 1700
    }
    else if (obj.age === '51-60') {
        calories = 1700
    }
    else if (obj.age === '61-75') {
        calories = 1600
    }
    else {
        calories = 1600
    }

    if (obj.active === 'moderate') {
        calories += 200
    }
    else if (obj.active === 'active') {
        calories += 400
    }

    return calories
}


router.put('/', async (req, res, next) => {
    try {
        console.log("REQ BODY", req.body)
        const currRange = getRange(req.body)
        const calorieRange = await CalorieRange.findOne({
            where: {
                range: currRange
            },
            include: Ingredient
        })

        res.json(calorieRange)
    } catch (err) {
        next(err)
    }
})


module.exports = router

// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=9d055d7c783c4339a1a39e5fda1fe64b

// https://api.spoonacular.com/recipes/complexSearch?query=

// GET https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+brownRice,+sugar&number=2
