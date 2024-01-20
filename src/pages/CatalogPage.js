import { Catalog } from 'components/Catalog/Catalog';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { getCars } from '../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {isLoading && <Loader />}
      <Catalog />
    </>
  );
};

export default CatalogPage;
