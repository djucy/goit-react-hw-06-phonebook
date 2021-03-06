import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../redux/contacts-action';
import initialState from '../../todos.json';


const items = createReducer( initialState,{
       
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({id})=> id !== payload),
    
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
})
