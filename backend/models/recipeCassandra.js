const { client } = require('../cassandraConnection');

const createRecipeTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS recipes (
            id UUID PRIMARY KEY,
            title TEXT,
            ingredients LIST<TEXT>,
            instructions TEXT
        );
    `;
    await client.execute(query);
};

const insertRecipe = async (recipe) => {
    const query = `
        INSERT INTO recipes (id, title, ingredients, instructions)
        VALUES (uuid(), ?, ?, ?)
    `;
    await client.execute(query, [recipe.title, recipe.ingredients, recipe.instructions], { prepare: true });
};

const getAllRecipes = async () => {
    const query = 'SELECT * FROM recipes';
    const result = await client.execute(query);
    return result.rows;
};

module.exports = { createRecipeTable, insertRecipe, getAllRecipes };
