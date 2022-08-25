import Main from './components/MainComponent';
import './App.css';
import React, { createContext, useReducer } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { applyMiddleware, combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './redux/dishes';
import { Comments } from './redux/comments';
import { Promotions } from './redux/promotions';
import { Leaders } from './redux/leaders';
import { Feedback } from './redux/forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const store = ConfigureStore();

const App = () => {
    return (    
        <BrowserRouter>
          <div className='App'>
              <Main/>
          </div>  
        </BrowserRouter>
    );
}

App();

store.subscribe(App);

export default App;
