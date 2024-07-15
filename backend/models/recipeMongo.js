const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
});

const RecipeMongo = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeMongo;
