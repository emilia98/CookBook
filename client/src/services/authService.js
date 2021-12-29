import { APIEndpoints, Methods } from '../helpers/constants/API';

export const login = async (usernameEmail, password) => {
    let res = await fetch(`${baseAuthUrl}/login`, {
        method: Methods.get,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usernameEmail, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const register = (username, email, fullName, password) => {
    return fetch(APIEndpoints.getAuthEndpoint('register'), {
        method: Methods.post,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, fullName, password })
    }).then(res => res.json());
}

/*
export const logout = (token) => {
    return fetch()
}

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};
*/

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};