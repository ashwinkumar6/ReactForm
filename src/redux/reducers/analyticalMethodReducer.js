import { AnalyticalMethodTypes } from '../filterType';

const initialState = {
    targetMethod: 'None'
}

const analyticalMethodReducer = (state = initialState, action) => {
    switch(action.type) {
        case "None":
        case AnalyticalMethodTypes.API: 
        case AnalyticalMethodTypes.Bioburden: 
        case AnalyticalMethodTypes.CleaningAgent: 
        case AnalyticalMethodTypes.Endotoxin: 
        {
            state = {...state, targetMethod: action.type}
            break;
        }
    }
    return state;
}

export default analyticalMethodReducer;