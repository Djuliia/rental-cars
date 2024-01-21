// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreCars } from '../../redux/operations';
import {
  selectCars,
  selectCarsFiltered,
  selectHasMore,
} from '../../redux/selectors';
import { BtnLoadMore, CardList } from './Catalog.styled';

import { CarItem } from 'components/CarItem/CarItem';

export const Catalog = () => {
  const dispatch = useDispatch();
  const hasMore = useSelector(selectHasMore);
  const cars = useSelector(selectCars);
  const carsFiltered = useSelector(selectCarsFiltered);

  const handleLoadMore = () => {
    dispatch(loadMoreCars({ page: cars.length / 12 + 1, limit: 12 }));
  };

  return (
    <div>
      <CardList>
        {(carsFiltered.length > 0 ? carsFiltered : cars).map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </CardList>

      {hasMore && (
        <BtnLoadMore type="button" onClick={handleLoadMore}>
          Load more
        </BtnLoadMore>
      )}
    </div>
  );
};
