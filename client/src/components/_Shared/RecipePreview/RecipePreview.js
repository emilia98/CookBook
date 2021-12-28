import React from 'react';
import './RecipePreview.css';

const RecipePreview = (props) => {
    let recipe = props.recipe

    return (
        <div className="recipe-card">
            <div className="thumbnail" style={{ backgroundImage: `url(${recipe.thumbnail})` }}>
                <div className="portions">
                    <span className="icon">
                        <i className="fas fa-utensils"></i>
                    </span>
                    <span className="text">
                        {recipe.servings}
                    </span>
                </div>
            </div>
            <div className="title">
                {recipe.title}
            </div>
            <div className="stats">
                <div className="row">
                    <div className="col-6">
                        <div className="times">
                            <span className="times-icon">
                                <i className="fas fa-temperature-high"></i>
                            </span>
                            <span className="times-time">{recipe.preparationTime} min</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="times">
                            <span className="times-icon">
                                <i className="fas fa-temperature-high"></i>
                            </span>
                            <span className="times-time">{recipe.cookingTime} min</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipePreview;