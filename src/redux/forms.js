import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstName: '',
    lastName: '',
    telNum: '',
    email: '',
    agree: false,
    contactType: 'Tel. ',
    message: ''
}

export const Feedback = (state={
    errMess: null,
    feedback: {
        firstName: '',
        lastName: '',
        telNum: '',
        email: '',
        agree: false,
        contactType: 'Tel. ',
        message: ''
    }
}, action)=> {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK: 
            return {...state, feedback: action.payload}
        default:
            return state;
    } 
}