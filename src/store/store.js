import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'

// const store = createStore(persistedReducer, middleware);
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware)
export const persistor = persistStore(store)
