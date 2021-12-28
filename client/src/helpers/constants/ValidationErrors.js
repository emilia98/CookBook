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

    static recipeTitleLength = "Title should be between 3 and 100 characters long!"
    static recipeTitleRequired = "Title is required!"
    static preparationTimeInvalid = "Preparation TIme should be an integer number!"
    static preparationTimeRequired = "Preparation Time is required!"
    static preparationTimeRange = "Preparation Time should be at most 1440!"
    static cookingTimeInvalid = "Cooking Time should be an integer number!"
    static cookingTimeRequired = "Cooking Time is required!"
    static cookingTimeRange = "Cooking Time should be at most 1440!"
    static servingsInvalid = "Servings should be an integer number!"
    static servingsRequired = "Servings is required!"
    static servingsRange = "Servings should be at most 20!"
}

export default ValidationErrors;