import { useAuthContext } from '../context/AuthContext';
import { APIEndpoints, Methods } from '../helpers/constants/API';

export const getAll = async () => {
    let res = await fetch(APIEndpoints.getRecipeEndpoint(), {
        method: Methods.get,
        headers: {
            "Content-Type": "application/json"
        }
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const getById = (recipeId) => {
    return fetch(APIEndpoints.getRecipeEndpoint(recipeId), {
        method: Methods.get,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export const createRecipe = async ({ recipe, token }) => {
    let res = await fetch(APIEndpoints.getRecipeEndpoint(), {
        method: Methods.post,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title: recipe.title, description: recipe.description, preparationTime: recipe.preparationTime, 
            cookingTime: recipe.cookingTime, servings: recipe.servings })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}