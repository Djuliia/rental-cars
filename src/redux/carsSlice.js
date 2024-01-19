import { getCars, loadMoreCars } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const carsInitialState = {
  cars: [],
  error: null,
  isLoading: false,
  hasMore: true,
  favorites: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(loadMoreCars.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.hasMore = payload.length > 0;
      })
      .addCase(loadMoreCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadMoreCars.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
