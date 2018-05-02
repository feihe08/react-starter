import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  // TODO: add some middleware for better development
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export default createStore(rootReducer, initialState, composedEnhancers)
