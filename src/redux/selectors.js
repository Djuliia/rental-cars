import { createSelector } from '@reduxjs/toolkit';
export const selectCars = state => state.cars.cars;
export const selectHasMore = state => state.cars.hasMore;
export const selectFavorite = state => state.favorites.favorites;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFilter = state => state.filter;
export const selectCarsFull = state => state.filter.filteredCars;

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
