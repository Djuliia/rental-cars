import { createSlice } from '@reduxjs/toolkit';
import { getCarsFiltered } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      brand: '',
      price: '',
      from: '',
      to: '',
    },
    filteredCars: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
    resetFilters: state => {
      return {
        filters: {
          brand: '',
          price: '',
          from: '',
          to: '',
        },
        filteredCars: [],
        isError: false,
        isLoading: false,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarsFiltered.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCarsFiltered.fulfilled, (state, action) => {
        state.filteredCars = action.payload;
        state.isLoading = false;
      })
      .addCase(getCarsFiltered.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
