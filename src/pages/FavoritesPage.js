import { Favorites } from 'components/Favorites/Favorites';
import { CarLoader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../redux/operations';
import { selectFavorite, selectIsLoading } from '../redux/selectors';
import { StyledLink, Text } from 'components/Favorites/Favorites.styled';
import carImg from '../images/choose-your-car.jpg';


const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CarLoader />}
      {favorites.length > 0 ? (
        <Favorites />
      ) : (
        <>
          <Text>
            No cars added yet. Go to the&nbsp;
            <StyledLink to="/catalog">catalog</StyledLink>
          </Text>
          <div style={{ height: '75vh', overflow: 'hidden' }}>
            <img src={carImg} alt="car" />
          </div>
        </>
      )}
    </>
  );
};

export default FavoritesPage;
