import { createSelector } from '@reduxjs/toolkit';
export const selectCars = state => state.cars.cars;
export const selectHasMore = state => state.cars.hasMore;
export const selectFavoriteId = state => state.favorites.idx;
export const selectIsLoading = state => state.cars.isLoading;

export const selectFavoriteCards = createSelector(
  [selectCars, selectFavoriteId],
  (allCars, favoriteIds) => {
    return allCars.filter(card => favoriteIds.includes(card.id));
  }
);
