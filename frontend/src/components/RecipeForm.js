import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ dbType, fetchRecipes }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipe = { title, ingredients: ingredients.split(','), instructions };

        await axios.post(`http://localhost:3000/${dbType}/recipes`, recipe);
        fetchRecipes();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" />
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions"></textarea>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
