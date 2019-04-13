import { AnalyticalMethodTypes } from '../filterType';
import actionType from '../actionType';

const initialState = {
    data: {
        Api: [],
        CleaningAgent: [],
        Bioburden: [],
        Endotoxin: []
    }
}

const formDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SUBMIT_FORM_DATA:
            {
                let data = state.data
                switch (action.residueType) {
                    case AnalyticalMethodTypes.API:
                    {
                        data.Api.push(action.payload);
                        state = {
                            ...state,
                            data: {
                                ...state.data,
                                Api: data.Api
                            }
                        }
                        break;
                    }

                    case AnalyticalMethodTypes.CleaningAgent:
                    {
                        data.CleaningAgent.push(action.payload);
                        state = {
                            ...state,
                            data: {
                                ...state.data,
                                CleaningAgent: data.CleaningAgent
                            }
                        }
                        break;
                    }

                    case AnalyticalMethodTypes.Bioburden:
                    {
                        data.Bioburden.push(action.payload);
                        state = {
                            ...state,
                            data : {
                                ...state.data,
                                Bioburden: data.Bioburden
                            }
                        }
                        break;
                    }

                    case AnalyticalMethodTypes.Endotoxin:
                    {
                        data.Endotoxin.push(action.payload);
                        state = {
                            ...state,
                            data : {
                                ...state.data,
                                Endotoxin: data.Endotoxin
                            }
                        }
                        break;
                    }
                }
                break;
            }
    }
    return state;
}

export default formDataReducer;