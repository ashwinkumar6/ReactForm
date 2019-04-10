const tweetsReducer = (state = [], action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, tweet: action.payload.tweet}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, tweet: action.payload.tweet}
            break;
        }
    }
    return state;
}

export default tweetsReducer;