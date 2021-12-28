import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import ListRecipes from './ListRecipes/ListRecipes';
import NewRecipe from './NewRecipe/NewRecipe';

const Recipes = () => (
    <div>
        <div>
            <Link to="/recipe/browse">Browse Recipes</Link>
            <Link to="/recipe/new">New Recipe</Link>
        </div>
        <Routes>
        <Route path="browse" element={ <ListRecipes />} />
        <Route path="new" element={ <NewRecipe />} />
    </Routes>
    </div>
)

export default Recipes