import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from 'reducers'

const middlewares = [thunk]

export default (createStore(
    createRootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
));
