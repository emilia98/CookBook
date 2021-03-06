const baseURL = "https://localhost:5001/api";

class APIEndpoints {
    static getAuthEndpoint = (endpointURL) => {
        return `${baseURL}/auth/${endpointURL}`
    }

    static getRecipeEndpoint = (endpointURL) => {
        return `${baseURL}/recipe/${endpointURL}`
    }
}

class Methods {
    static get = "GET"
    static post = "POST"
    static put = "PUT"
    static delete = "DELETE"
}

export { APIEndpoints, Methods };