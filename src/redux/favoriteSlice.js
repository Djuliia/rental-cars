import { createSlice } from '@reduxjs/toolkit';
// import { selectFavoriteCards } from './selectors';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    idx: [],
    favorites: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      const cardId = payload;
      if (!state.idx.includes(cardId)) {
        state.idx.push(cardId);
        // state.favorites = selectFavoriteCards(state);
      }
    },
    removeFavorite: (state, { payload }) => {
      const cardId = payload;
      state.idx = state.idx.filter(id => id !== cardId);
      // state.favorites = selectFavoriteCards(state);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
