import React from 'react';
import './NewRecipe.css';
import RecipeForm from '../_Shared/RecipeForm/RecipeForm';
import { cookingTimeValidator, preparationTimeValidator, recipeTitleValidator, servingsValidator } from '../../../helpers/validators/recipeValidator';

const NewRecipe = () => {
    let fields = {
        title: { placeholder: "Title", type: "text", name: "title", id: "title", label: "Title", validatorFunc: recipeTitleValidator },
        preparationTime: { placeholder: "Preparation Time", type: "text", name: "preparationTime", id: "preparationTime", label: "Preparation Time", validatorFunc: preparationTimeValidator },
        cookingTime: { placeholder: "Cooking Time", type: "text", name: "cookingTime", id: "cookingTime", label: "Cooking Time", validatorFunc: cookingTimeValidator },
        servings: { placeholder: "Servings", type: "text", name: "servings", id: "servings", label: "Servings", validatorFunc: servingsValidator }
    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let preparationTime = formData.get('preparationTime');
        let cookingTime = formData.get('cookingTime');
        let servings = formData.get('servings');
        let description = formData.get('description');
    }

    return (
        <div className="container recipe-new">
            <div className="text-center recipe-titles">
                <h1 className="main-title">New Recipe</h1>
                <h5 className="subtitle">Share with us your favourite recipe!</h5>
            </div>
            <RecipeForm fields={fields} handleSubmit={submitFormHandler}/>
        </div>  
    );
};

export default NewRecipe;