import React from 'react';
import './ListRecipes.css';
import RecipePreview from '../../_Shared/RecipePreview'

const ListRecipes = () => {
    let recipes = [
        { id: 1, title: "Christmas cookies with ginger", preparationTime: 45, cookingTime: 105, servings: 10, thumbnail: "https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg", isWishlisted: false },
        { id: 2, title: "Pastitsio", preparationTime: 10, cookingTime: 12, servings: 2, thumbnail: "https://ichef.bbci.co.uk//food/ic/food_16x9_1600/recipes/pastitsio_83078_16x9.jpg", isWishlisted: false },
        { id: 3, title: "Christmas cookies with ginger", preparationTime: 30, cookingTime: 45, servings: 7, thumbnail: "https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg", isWishlisted: false },
        { id: 4, title: "Christmas cookies with ginger", preparationTime: 10, cookingTime: 25, servings: 3, thumbnail: "https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg", isWishlisted: false },
        { id: 5, title: "Christmas cookies with ginger", preparationTime: 15, cookingTime: 60, servings: 8, thumbnail: "https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cookies-Sugar-Cookies_7.jpg", isWishlisted: false },
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    { recipes.map(r => (
                        <div className="col-lg-3 col-md-4 col-xs-12 col-sm-6">
                            <RecipePreview recipe={ r } />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ListRecipes;