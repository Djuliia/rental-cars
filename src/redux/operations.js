import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const toggleFavorite = createAsyncThunk(
//   'cars/toggleFavorite',
//   async ({ carId, isFavorite }, thunkAPI) => {
//     try {
//       if (isFavorite) {
//         // Видалити з обраних
//         // Викликати API або реалізувати власну логіку
//       } else {
//         // Додати до обраних
//         // Викликати API або реалізувати власну логіку
//       }
//       return carId;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
