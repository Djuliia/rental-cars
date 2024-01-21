import { Catalog } from 'components/Catalog/Catalog';
import { Filter } from 'components/Filter/Filter';
import { CarLoader } from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { getCars } from '../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {isLoading && <CarLoader />}
      {!isLoading && !isError  && <Catalog />}
    </>
  );
};

export default CatalogPage;
