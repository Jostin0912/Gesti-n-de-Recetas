const express = require('express');
const { insertRecipe, getAllRecipes } = require('../models/recipeCassandra');
const router = express.Router();

router.post('/recipes', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    await insertRecipe({ title, ingredients, instructions });
    res.status(201).send('Recipe added');
});

router.get('/recipes', async (req, res) => {
    const recipes = await getAllRecipes();
    res.send(recipes);
});

module.exports = router;
