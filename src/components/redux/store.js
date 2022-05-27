import { configureStore } from '@reduxjs/toolkit';
import  contactsReducer from 'components/redux/contacts-reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
})

export default store