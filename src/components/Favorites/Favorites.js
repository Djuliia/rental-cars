import { useDispatch, useSelector } from 'react-redux';
import { CarItem } from 'components/CarItem/CarItem';
import { CardList } from 'components/Catalog/Catalog.styled';
import { selectFavoriteCards, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { getCars } from '../../redux/operations';

export const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCards);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!favoriteCars.length && !isLoading) {
      dispatch(getCars());
    }
  }, [dispatch, favoriteCars, isLoading]);

  return (
    !isLoading && (
      <div>
        <CardList>
          {favoriteCars.map(card => (
            <CarItem key={card.id} car={card} />
          ))}
        </CardList>
      </div>
    )
  );
};
