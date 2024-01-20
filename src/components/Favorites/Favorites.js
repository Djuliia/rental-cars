import { useSelector } from 'react-redux';
import { CarItem } from 'components/CarItem/CarItem';
import { CardList } from 'components/Catalog/Catalog.styled';
import { selectFavorite } from '../../redux/selectors';

export const Favorites = () => {
  const favoriteCars = useSelector(selectFavorite);

  return (
    <div>
      <CardList>
        {favoriteCars.map(card => (
          <CarItem key={card.id} car={card} />
        ))}
      </CardList>
    </div>
  );
};
