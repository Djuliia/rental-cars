import { Favorites } from 'components/Favorites/Favorites';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../redux/operations';
import { selectFavorite, selectIsLoading } from '../redux/selectors';
import { StyledLink, Text } from 'components/Favorites/Favorites.styled';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {favorites.length > 0 ? (
        <Favorites />
      ) : (
        <>
          <Text>
            No cars added yet. Go to the&nbsp;
            <StyledLink to="/catalog">catalog</StyledLink>
          </Text>
        </>
      )}
    </>
  );
};

export default FavoritesPage;
