import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
} from 'redux-persist';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './carsSlice';
import { favoriteReducer } from './favoriteSlice';
import { filterReducer } from './filterSlice';

const favoritePersistConfig = {
  key: 'root',
  storage,
  whitelist: ['idx'],
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const ignoredPersistenceActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
];

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: persistReducer(filterPersistConfig, filterReducer),
    favorites: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ignoredPersistenceActions,
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
