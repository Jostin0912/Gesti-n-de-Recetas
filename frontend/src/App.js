import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [dbType, setDbType] = useState('mongo');

    const fetchRecipes = async () => {
        const response = await axios.get(`http://localhost:3000/${dbType}/recipes`);
        setRecipes(response.data);
    };

    useEffect(() => {
        fetchRecipes();
    }, [dbType]);

    return (
        <div>
            <h1>Recipe Management</h1>
            <button onClick={() => setDbType('mongo')}>MongoDB</button>
            <button onClick={() => setDbType('cassandra')}>Cassandra</button>
            <RecipeForm dbType={dbType} fetchRecipes={fetchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
