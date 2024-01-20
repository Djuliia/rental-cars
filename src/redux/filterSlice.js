import { createSlice } from '@reduxjs/toolkit';
import { getCarsFull } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    price: '',
    from: '',
    to: '',
    filteredCars: [],
  },
  reducers: {
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setMileageRange: (state, { payload }) => {
      state.from = payload.from;
      state.to = payload.to;
    },
    resetFilter: state => {
      return {
        brand: '',
        price: '',
        from: '',
        to: '',
        filteredCars: [],
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getCarsFull.fulfilled, (state, action) => {

      state.filteredCars = action.payload;
    });
  },
});

export const { setBrand, setPrice, setMileageRange, resetFilter, resetFilters } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
