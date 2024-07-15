const express = require('express');
const RecipeMongo = require('../models/recipeMongo');
const router = express.Router();

router.post('/recipes', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new RecipeMongo({ title, ingredients, instructions });
    await newRecipe.save();
    res.status(201).send(newRecipe);
});

router.get('/recipes', async (req, res) => {
    const recipes = await RecipeMongo.find();
    res.send(recipes);
});

module.exports = router;
