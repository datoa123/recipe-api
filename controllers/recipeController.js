const Recipe = require('./models/Recipe')
const {createCategory} = require("./categoryController");

const createRecipe = async (req, res) => {
    try {
        const { title, description, ingredients, instructions, cookingTime, servings } = req.body;

        const newRecipe = await Recipe.create({
            title,
            description,
            ingredients,
            instructions,
            cookingTime,
            servings,
        })
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getAllRecipe = async (req, res) => {
    try {
        const recipeFind = await Recipe.find()
        res.status(201).json(recipeFind)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getRecipeById = async (req, res) => {
    try {
        const recipeFind = await Recipe.findById(req.params.id).populate('category')
        res.status(201).json(recipeFind)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const updateRecipe = async (req, res) => {
    try {
        const recipeFind = await Recipe.findByIdAndUpdate(req.params.id, {new: true}, {runValidators: true})
        res.status(201).json(recipeFind)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const recipeFind = await Recipe.findByIdAndDelete(req.params.id)
        res.status(201).json(recipeFind)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    createCategory,
    getAllRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
}