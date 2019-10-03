import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {homeReducer} from './../reducer/home.reducer'
import {pageReducer} from './../reducer/page.reducer'
const rootReducer = combineReducers({
    home: homeReducer,
    page: pageReducer
})

export const store = createStore(rootReducer)