import actionType from '../actionType';

export const submitFormData = (value, residueType) => {
    return {
        type: actionType.SUBMIT_FORM_DATA,
        payload: value,
        residueType : residueType
    }
}
