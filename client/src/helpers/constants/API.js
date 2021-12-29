class APIEndpoints {
    static baseURL = "https://localhost:5001/api"

    static getAuthEndpoint = (endpointURL) => {
        return `${baseURL}/auth/${endpointURL}`
    }
}

class Methods {
    static get = "GET"
    static post = "POST"
    static put = "PUT"
    static delete = "DELETE"
}

export { APIEndpoints, Methods };