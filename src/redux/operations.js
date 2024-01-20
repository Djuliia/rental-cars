import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://651c6054194f77f2a5afc379.mockapi.io';

const params = new URLSearchParams({
  page: 1,
  limit: 12,
});

export const getCars = createAsyncThunk('cars/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/adverts?${params}`);
    return data;
  } catch (e) {
    toast.error('Something went wrong. Try again...');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const loadMoreCars = createAsyncThunk(
  'cars/loadMore',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return data;
    } catch (e) {
      toast.error('Something went wrong. Try again...');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getCars = createAsyncThunk(
//   'cars/getAll',
//   async (filters, thunkAPI) => {
//     try {
//       const { data } = await axios.get(
//         `/adverts?${new URLSearchParams(filters)}`
//       );
//       return data;
//     } catch (e) {
//       toast.error('Something went wrong. Try again...');
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const loadMoreCars = createAsyncThunk(
//   'cars/loadMore',
//   async ({ page, limit }, thunkAPI) => {
//     try {
//       const params = new URLSearchParams({
//         page,
//         limit,
//       });

//       const { data } = await axios.get(`/adverts?${params}`);
//       return data;
//     } catch (e) {
//       toast.error('Something went wrong. Try again...');
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );


