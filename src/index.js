import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import countReducer from './store/reducer';
import resultReducer from './store/results';



const logger=store=>{
    return next=>{
        return action=>{
            console.log('[Middlware dispatching actions]',action);
            const result=next(action);
            console.log('state after dispatching:',store.getState());
            return result;
        }
    }
}


const composedEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  combinedReducer=combineReducers({
    ctrRd:countReducer,
    resRd:resultReducer
})
const store = createStore(combinedReducer,composedEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
