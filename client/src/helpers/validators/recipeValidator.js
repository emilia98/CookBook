import ValidationErrors from "../constants/ValidationErrors";

const intNumberRegex = /^([0-9]+)$/;

const recipeTitleValidator = (title) => {
    let value = String(title).trim()

    if (value.length == 0) {
        return ValidationErrors.recipeTitleRequired
    }

    if (value.length < 3 || value.length > 100) {
        return ValidationErrors.recipeTitleLength
    }

    return null
}

const preparationTimeValidator = (preparationTime) => {
    let value = String(preparationTime).trim()
    
    if (value.length == 0) {
        return ValidationErrors.preparationTimeRequired
    }

    if (!value.match(intNumberRegex)) {
        return ValidationErrors.preparationTimeInvalid
    }

    let valueAsNumber = parseInt(value)
    if (valueAsNumber < 0 || valueAsNumber > 1440) {
        return ValidationErrors.preparationTimeRange
    }

    return null;
}

const cookingTimeValidator = (cookingTime) => {
    let value = String(cookingTime).trim()

    if (value.length == 0) {
        return ValidationErrors.cookingTimeRequired
    }

    if (!value.match(intNumberRegex)) {
        return ValidationErrors.cookingTimeInvalid
    }

    let valueAsNumber = parseInt(value)
    if (valueAsNumber < 0 || valueAsNumber > 1440) {
        return ValidationErrors.cookingTimeRange
    }

    return null;
}

const servingsValidator = (servings) => {
    let value = String(servings).trim();

    if (value.length == 0) {
        return ValidationErrors.servingsRequired
    }

    if (!value.match(intNumberRegex)) {
        return ValidationErrors.servingsInvalid
    }

    let valueAsNumber = parseInt(value)
    if (valueAsNumber < 0 || valueAsNumber > 20) {
        return ValidationErrors.servingsRange
    }

    console.log("servings", value)
    return null
}

export { recipeTitleValidator, preparationTimeValidator, cookingTimeValidator, servingsValidator }