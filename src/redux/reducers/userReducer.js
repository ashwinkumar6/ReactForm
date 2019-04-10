const useReducer = (state = {}, action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload.name}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload.age}
            break;
        }
    }
    return state;
}
export default useReducer;