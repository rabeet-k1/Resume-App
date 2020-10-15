import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userDetailsReducer from './userDetailsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['userDetails']
}

const rootReducer = combineReducers({
    auth: authReducer,
    userDetails: userDetailsReducer
})

export default persistReducer(persistConfig, rootReducer);