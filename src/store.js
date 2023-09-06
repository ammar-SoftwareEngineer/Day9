// store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './rtk/MyFav/favoritesSlice';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import the necessary function


const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
