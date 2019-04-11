import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from "redux-devtools-extension"
// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// }
//
// const error = store => next => action => {
//     try{
//         next(action)
//     } catch (e) {
//         console.log('error' + e)
//     }
// };

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger,thunk)));

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
