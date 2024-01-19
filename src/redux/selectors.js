import { createSelector } from '@reduxjs/toolkit';
export const selectCars = state => state.cars.cars;
export const selectHasMore = state => state.cars.hasMore;
export const selectFavoriteId = state => state.favorites.idx;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFilter = state => state.filter;

export const selectFavoriteCards = createSelector(
  [selectCars, selectFavoriteId],
  (allCars, favoriteIds) => {
    return allCars.filter(card => favoriteIds.includes(card.id));
  }
);

export const filterCarsSelector = createSelector(
  [selectCars, selectFilter],

  (cars, filters) => {
    let filteredCars = [...cars];

    if (filters.brand) {
      filteredCars = filteredCars.filter(car => car.make === filters.brand);
    }

    if (filters.price) {
      filteredCars = filteredCars.filter(
        car => car.rentalPrice === filters.price
      );
    }

    if (filters.from && filters.to) {
      filteredCars = filteredCars.filter(
        car => car.mileage >= filters.from && car.mileage <= filters.to
      );
    }

    return filteredCars;
  }
);
