class ValidationErrors {
    static passwordLength = "Password should be between 8 and 45 characters long!"
    static passwordRequired = "Password is required!"
    static usernameLength = "Username should be between 4 and 25 characters long!"
    static usernameRequired = "Username is required!"
    static emailRequired = "Email is required!"
    static emailInvalid = "Email is not valid!"
    static fullNameRequired = "Full Name is required!"
    static fullNameLength = "Full Name should be between 3 and 100 characters long!"
    static fullNameInvalid = "Full Name should contain only letters, \"-\" and \".\"!"
    static usernameEmailRequired = "Username/Email is required!"
}

export default ValidationErrors;