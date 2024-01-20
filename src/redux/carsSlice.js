import { getCars, loadMoreCars } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const carsInitialState = {
  cars: [],
  error: null,
  isLoading: false,
  hasMore: true,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loadMoreCars.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.hasMore = payload.length > 0;
        state.isLoading = false;
        state.error = null;
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
