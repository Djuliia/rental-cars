import { useSelector } from 'react-redux';
import { CarItem } from 'components/CarItem/CarItem';
import { CardList } from 'components/Catalog/Catalog.styled';
import { selectFavorite } from '../../redux/selectors';
import { CardModal } from 'components/Modal/Modal';

export const Favorites = ({
  openModal,
  isModalOpen,
  closeModal,
  selectedCar,
}) => {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <div>
      <CardList>
        {favoriteCars.map(card => (
          <CarItem key={card.id} car={card} openModal={openModal} />
        ))}
      </CardList>
      {isModalOpen && (
        <CardModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          car={selectedCar}
        />
      )}
    </div>
  );
};
