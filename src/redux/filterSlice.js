import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    price: '',
    from: '',
    to: '',
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
      };
    },
  },
});

export const { setBrand, setPrice, setMileageRange, resetFilter } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
