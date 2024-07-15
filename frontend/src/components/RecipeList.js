import React from 'react';

const RecipeList = ({ recipes }) => (
    <ul>
        {recipes.map(recipe => (
            <li key={recipe.id || recipe._id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.ingredients.join(', ')}</p>
                <p>{recipe.instructions}</p>
            </li>
        ))}
    </ul>
);

export default RecipeList;
