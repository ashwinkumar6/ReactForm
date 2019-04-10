export const nameChange = (value) => {
    return {
        type: "CHANGE_NAME", // use from actionTypes instead
        payload: value
    }
}

export const ageChange = (value) => {
    return {
        type: "CHANGE_AGE", // use from actionTypes instead
        payload: value
    }
}
