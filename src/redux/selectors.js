// import { createSelector } from '@reduxjs/toolkit';
export const selectCars = state => state.cars.cars;
export const selectHasMore = state => state.cars.hasMore;
export const selectFavorite = state => state.favorites.favorites;
export const selectIsLoading = state => state.cars.isLoading;
export const selectIsError = state => state.filter.isError;
export const selectFilter = state => state.filter;
export const selectCarsFiltered = state => state.filter.filteredCars;
