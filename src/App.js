import Main from './components/MainComponent';
import './App.css';
import React, { createContext, useReducer } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { createForms } from 'react-redux-form';
import { Dishes } from './store/reducers/dishes';
import { Comments } from './store/reducers/comments';
import { Promotions } from './store/reducers/promotions';
import { Leaders } from './store/reducers/leaders';
import { Feedback, InitialFeedback } from './store/reducers/forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { StoreContext } from './store';
import { combineReducers } from './store/reducers';

const INITIAL_STATE = {
  dishes: {
    isLoading: true,
    errMess: null,
    dishes: []
  },
  comments: {
    errMess: null,
    comments: []
  },
  promotions: {
    isLoading: true,
    errMess: null,
    promotions: []
  },
  leaders: {
    isLoading: true,
    errMess: null,
    leaders: []
}
}

const App = () => {
  const[state, dispatch] = useReducer(combineReducers({
    dishes: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders,            
    ...createForms({
      feedback: Feedback
    })
  }),INITIAL_STATE);

    return (    
      <StoreContext.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <div className='App'>
              <Main/>
          </div>  
        </BrowserRouter>
      </StoreContext.Provider>

    );
}

export default App;
