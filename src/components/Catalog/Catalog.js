import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, loadMoreCars } from '../../redux/operations';
import { filterCarsSelector, selectHasMore } from '../../redux/selectors';

import { BtnLoadMore, CardList } from './Catalog.styled';
import { CardModal } from 'components/Modal/Modal';
import { CarItem } from 'components/CarItem/CarItem';
import { Filter } from 'components/Filter/Filter';

export const Catalog = () => {
  const dispatch = useDispatch();
  const hasMore = useSelector(selectHasMore);

  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filteredCars = useSelector(filterCarsSelector);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const openModal = car => {
    setSelectedCar(car);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLoadMore = () => {
    dispatch(loadMoreCars({ page: page + 1, limit: 12 }));
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Filter />
      <CardList>
        {filteredCars.map(car => (
          <CarItem key={car.id} car={car} openModal={openModal} />
        ))}
      </CardList>
      {isModalOpen && (
        <CardModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          car={selectedCar}
        />
      )}
      {hasMore && (
        <BtnLoadMore type="button" onClick={handleLoadMore}>
          Load more
        </BtnLoadMore>
      )}
    </div>
  );
};
