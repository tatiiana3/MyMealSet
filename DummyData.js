const breakfast = [
  {
    id: 1,
    title: "Strawberry Banana Overnight Oats",
    imageUrl: "https://www.onelovelylife.com/wp-content/uploads/2020/03/Strawberry-Banana-Overnight-Oats6.jpg",
    link: 'https://tastesbetterfromscratch.com/strawberry-banana-overnight-oats/'
  },
  {
    id: 2,
    title: "Scrambled Eggs with Turkey Ham",
    imageUrl: 'https://images.media-allrecipes.com/userphotos/1674368.jpg',
    link: 'https://recipes.sparkpeople.com/recipe-detail.asp?recipe=149132'
  },
  {
    id: 3,
    title: "Yogurt Bowl With Fruits",
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2016%2F06%2F16190859%2Frhubarb-yogurt-bowl.jpg',
    link: 'https://www.chelseasmessyapron.com/top-10-favorite-ways-top-yogurt-bowl/'
  }

]

const lunch = [
  {
    id: 1,
    title: "Eggplant Casserole",
    imageUrl: "https://healthyrecipesblogs.com/wp-content/uploads/2011/07/eggplant-casserole-1-1.jpg",
    link: 'https://healthyrecipesblogs.com/eggplant-casserole-recipe/'
  },
  {
    id: 2,
    title: "Tuna and Spinach, Lemon Rice",
    imageUrl: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/07/18095254/riz-citronne-au-thon-et-epinards.jpg',
    link: 'http://www.5ingredients15minutes.com/en/recipes/main-course/fish-seafood/tuna-and-spinach-lemon-rice/'
  },
  {
    id: 3,
    title: "Turkey Bacon and Egg Fried Cauliflower Rice",
    imageUrl: 'https://i1.wp.com/www.glutenfreehomestead.com/wp-content/uploads/2015/02/FR5_edited-1.jpg',
    link: 'https://food52.com/recipes/75460-bacon-egg-fried-cauliflower-rice'
  }

]

const dinner = [
  {
    id: 1,
    title: "Skillet Tomato Chicken",
    imageUrl: "https://www.wellplated.com/wp-content/uploads/2017/07/Chicken-and-Tomatoes-with-Capers-600x748.jpg",
    link: "https://www.wellplated.com/chicken-and-tomatoes/"
  },
  {
    id: 2,
    title: "Chicken Bell Pepper Rice",
    imageUrl: 'https://www.sweetpillarfood.com/wp-content/uploads/2018/07/Chicken-red-pepper-rice_1719-copy.jpg',
    link: 'https://www.sweetpillarfood.com/chicken-dishes/chicken-bell-pepper-rice/'
  },
  {
    id: 3,
    title: "Ground Turkey Zucchini Pizza Boat",
    imageUrl: 'https://dadwithapan.com/wp-content/uploads/2017/08/Black-Bean-Turkey-Stuffed-Zuchinni-Boats-4-656x875.jpg',
    link: 'https://www.slenderkitchen.com/recipe/zucchini-and-ground-turkey-pizza-boats'
  }

]



const dummyData = [
  {
    id: 1,
    name: 'banana',
    servingAmount: 30,
    category: "fruit",
  },
  {
    id: 2,
    name: 'apple',
    servingAmount: 30,
    category: "fruit",
  },
  {
    id: 3,
    name: 'strawberries',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 4,
    name: 'tomatoes',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 5,
    name: 'blueberries',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 6,
    name: 'pear',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 7,
    name: 'grapes',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 8,
    name: 'avocado',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 9,
    name: 'spinach',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 10,
    name: 'eggplant',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 11,
    name: 'kale',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 12,
    name: 'carrots',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 13,
    name: 'mixed veggies',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 14,
    name: 'butternut squash',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 15,
    name: 'sweet potato',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 16,
    name: 'salmon',
    servingAmount: 30,
    category: "fish",

  },
  {
    id: 17,
    name: 'shrimp',
    servingAmount: 30,
    category: "fish",

  },
  {
    id: 18,
    name: 'chicken breast',
    servingAmount: 30,
    category: "meat",

  },
  {
    id: 19,
    name: 'ground turkey',
    servingAmount: 30,
    category: "meat",

  },
  {
    id: 20,
    name: 'brown rice',
    servingAmount: 30,
    category: "grains, beans, nuts",

  },
  {
    id: 21,
    name: 'whole wheat pasta',
    servingAmount: 30,
    category: "grains, beans, nuts",

  },
  {
    id: 22,
    name: 'hummus',
    servingAmount: 30,
    category: "grains, beans, nuts",

  },
  {
    id: 23,
    name: 'black beans',
    servingAmount: 30,
    category: "grains, beans, nuts",

  },
  {
    id: 24,
    name: 'whole wheat pita',
    servingAmount: 30,
    category: "grains, beans, nuts",

  },
  {
    id: 25,
    name: 'eggs',
    servingAmount: 30,
    category: "dairy",

  },
  {
    id: 26,
    name: 'almond milk',
    servingAmount: 30,
    category: "dairy",

  },
  {
    id: 27,
    name: 'coconut milk',
    servingAmount: 30,
    category: "dairy",

  },
  {
    id: 28,
    name: 'mozarella cheese',
    servingAmount: 30,
    category: "dairy",

  },
  {
    id: 29,
    name: 'kiwi',
    servingAMount: 30,
    category: 'fruit'
  },
  {
    id: 30,
    name: 'tuna',
    servingAmount: 30,
    category: "fish",

  },
  {
    id: 31,
    name: 'tofu',
    servingAMount: 30,
    category: 'alt protein'
  },
  {
    id: 32,
    name: 'zuchinni',
    servingAmount: 30,
    category: "vegetable",

  },
  {
    id: 33,
    name: 'lettuce',
    servingAMount: 30,
    category: 'vegetable'
  },
  {
    id: 34,
    name: 'raspberries',
    servingAmount: 30,
    category: "fruit",

  },
  {
    id: 35,
    name: 'parmesan',
    servingAMount: 30,
    category: 'vegetable'
  },
  {
    id: 36,
    name: 'oatmeal',
    servingAMount: 30,
    category: "grains, beans, nuts"
  },
  {
    id: 37,
    name: 'yogurt',
    servingAMount: 30,
    category: "dairy"
  },
  {
    id: 38,
    name: 'peppers',
    servingAMount: 30,
    category: "vegetable"
  },
  {
    id: 39,
    name: 'almond butter',
    servingAMount: 30,
    category: "fats"
  },
  {
    id: 40,
    name: 'peanut butter',
    servingAMount: 30,
    category: "fats"
  },
  {
    id: 41,
    name: 'chocolate',
    servingAMount: 30,
    category: "fats"
  },
  {
    id: 42,
    name: 'almond',
    servingAMount: 30,
    category: "fats"
  }


]

const rel = [
  {
    calorieRangeId: 1,
    ingredientId: 1
  },
  {
    calorieRangeId: 1,
    ingredientId: 2
  },
  {
    calorieRangeId: 1,
    ingredientId: 3
  },
  {
    calorieRangeId: 1,
    ingredientId: 8
  },
  {
    calorieRangeId: 1,
    ingredientId: 9
  },
  {
    calorieRangeId: 1,
    ingredientId: 10
  },
  {
    calorieRangeId: 1,
    ingredientId: 11
  },
  {
    calorieRangeId: 1,
    ingredientId: 16
  },
  {
    calorieRangeId: 1,
    ingredientId: 18
  },
  {
    calorieRangeId: 1,
    ingredientId: 20
  },
  {
    calorieRangeId: 1,
    ingredientId: 26
  },
  {
    calorieRangeId: 1,
    ingredientId: 37
  },
  {
    calorieRangeId: 1,
    ingredientId: 40
  },
  {
    calorieRangeId: 1,
    ingredientId: 25
  },
  {
    calorieRangeId: 2,
    ingredientId: 1
  },
  {
    calorieRangeId: 2,
    ingredientId: 2
  },
  {
    calorieRangeId: 2,
    ingredientId: 4
  },
  {
    calorieRangeId: 2,
    ingredientId: 5
  },
  {
    calorieRangeId: 2,
    ingredientId: 9
  },
  {
    calorieRangeId: 2,
    ingredientId: 10
  },
  {
    calorieRangeId: 2,
    ingredientId: 12
  },
  {
    calorieRangeId: 2,
    ingredientId: 17
  },
  {
    calorieRangeId: 2,
    ingredientId: 18
  },
  {
    calorieRangeId: 2,
    ingredientId: 20
  },
  {
    calorieRangeId: 2,
    ingredientId: 30
  },
  {
    calorieRangeId: 2,
    ingredientId: 37
  },
  {
    calorieRangeId: 2,
    ingredientId: 42
  },
  {
    calorieRangeId: 2,
    ingredientId: 36
  },
  {
    calorieRangeId: 3,
    ingredientId: 2
  },
  {
    calorieRangeId: 3,
    ingredientId: 3
  },
  {
    calorieRangeId: 3,
    ingredientId: 6
  },
  {
    calorieRangeId: 3,
    ingredientId: 13
  },
  {
    calorieRangeId: 3,
    ingredientId: 15
  },
  {
    calorieRangeId: 3,
    ingredientId: 19
  },
  {
    calorieRangeId: 3,
    ingredientId: 21
  },
  {
    calorieRangeId: 3,
    ingredientId: 23
  },
  {
    calorieRangeId: 3,
    ingredientId: 25
  },
  {
    calorieRangeId: 3,
    ingredientId: 26
  },
  {
    calorieRangeId: 3,
    ingredientId: 28
  },
  {
    calorieRangeId: 3,
    ingredientId: 29
  },
  {
    calorieRangeId: 3,
    ingredientId: 31
  },
  {
    calorieRangeId: 3,
    ingredientId: 36
  },


]

const calorieRanges = [
  {
    range: 1600,
    dietType: "omnivore"
  },
  {
    range: 1800,
    dietType: "omnivore"
  },
  {
    range: 2000,
    dietType: "omnivore"
  },
  {
    range: 2200,
    dietType: "omnivore"
  },
  {
    range: 2400,
    dietType: "omnivore"
  },
  {
    range: 2800,
    dietType: "omnivore"
  },
  {
    range: 3000,
    dietType: "omnivore"
  },
  {
    range: 1900,
    dietType: "omnivore"
  },
  {
    range: 2100,
    dietType: "omnivore"
  },
  {
    range: 2300,
    dietType: "omnivore"
  },
]


const ingredients = [
  {
    id: 1,
    name: 'banana',
    servingAmount: 30,
    category: "fruit",
    meal: 'snack'
  },
  {
    id: 2,
    name: 'apple',
    servingAmount: 30,
    category: "fruit",
    meal: 'breakfast'

  },
  {
    id: 3,
    name: 'strawberries',
    servingAmount: 30,
    category: "fruit",
    meal: 'breakfast'

  },
  {
    id: 4,
    name: 'tomatoes',
    servingAmount: 30,
    category: "fruit",
    meal: 'lunch'

  },
  {
    id: 5,
    name: 'spinach',
    servingAmount: 30,
    category: "fruit",
    meal: 'lunch'

  },
  {
    id: 17,
    name: 'zucchini',
    servingAmount: 30,
    category: "fruit",
    meal: 'dinner'

  },
  {
    id: 18,
    name: 'ground turkey',
    servingAmount: 30,
    category: "meat",
    meal: 'breakfast'

  },
  {
    id: 7,
    name: 'chicken',
    servingAmount: 30,
    category: "fruit",
    meal: 'dinner'

  },
  {
    id: 8,
    name: 'tuna',
    servingAmount: 30,
    category: "fish",
    meal: 'dinner'

  },
  {
    id: 9,
    name: 'eggs',
    servingAmount: 30,
    meal: 'breakfast',
    category: "dairy",

  },
  {
    id: 10,
    name: 'yogurt',
    servingAmount: 30,
    meal: "snack",
    category: "dairy",

  },
  {
    id: 11,
    name: 'brown rice',
    servingAmount: 30,
    meal: 'lunch',
    category: "grains",

  },
  {
    id: 12,
    name: 'almonds',
    servingAmount: 30,
    meal: 'snack',
    category: "fats",

  },
  {
    id: 13,
    name: 'cauliflower rice',
    servingAmount: 30,
    category: "vegetable",
    meal: 'dinner'

  },
  {
    id: 14,
    name: 'almond milk',
    servingAmount: 30,
    category: "dairy",
    meal: 'breakfast'
  },
  {
    id: 15,
    name: 'peppers',
    servingAmount: 30,
    category: "vegetable",
    meal: 'lunch'

  },
  {
    id: 16,
    name: 'turkey bacon',
    servingAmount: 30,
    category: "meat",
    meal: 'breakfast'

  },

]


module.exports = {
  dummyData,
  calorieRanges,
  rel,
  breakfast,
  lunch,
  dinner,
  ingredients
}