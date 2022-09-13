import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const fetchDishes = () => {
    return fetch(baseUrl+ 'dishes')
            .then(response =>{
                if(response.ok) {
                    return response;
                } else {
                    let error = new Error("Error " + response.status + " : " + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
            .then(response => response.json())
            .catch(error=>error.message);
};

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => {
    return fetch(baseUrl+ 'comments')
        .then(response =>{
            if(response.ok) {
                return response;
            } else {
                let error = new Error("Error " + response.status + " : " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .catch(error => error.message);
};

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchLeaders = () => {
    return fetch(baseUrl+ 'leaders')
        .then(response =>{
            if(response.ok) {
                return response;
            } else {
                let error = new Error("Error " + response.status + " : " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .catch(error => error.message);
};

export const leadersLoading = () =>({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const fetchPromos = () => {
    return fetch(baseUrl+ 'promotions')
        .then(response =>{
            if(response.ok) {
                return response;
            } else {
                let error = new Error("Error " + response.status + " : " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .catch(error => error.message);
};

export const promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});

export const postFeedBack = (feedback) => async(dispatch) => {
    const newFeedback = {...feedback};
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl+'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response=>{
        if(response.ok) {
            return response;
        } else {
            const error = new Error("Error " + response.status + " : " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error=>{
        const errMess = new Error(error.message);
        throw errMess;
    })
    .then(response=>response.json())
    .then(feedback=>dispatch(addFeedback(feedback)))
    .catch(error => {
        console.log(error.message);
        alert("Your Feedback could not be posted\nError: "+ error.message);
    });
}

export const addFeedback = (feedback) =>({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postComment =(dishId, rating, author, comment) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl+'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response =>{
        if(response.ok) {
            return response;
        } else {
            let error = new Error("Error " + response.status + " : " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error.message);
        alert("Your comment could not be posted\nError: "+ error.message);
    });
}
