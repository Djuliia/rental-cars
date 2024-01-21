import { Formik } from 'formik';
import carBrands from '../../data/makes.json';
import pricePerHour from '../../data/price.json';
import { BtnSearch, Label, StyledField, StyledForm } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getCars, getCarsFiltered } from '../../redux/operations';
import { resetFilters, setFilters } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (!values.brand && !values.price && !values.from && !values.to) {
      dispatch(resetFilters());
      dispatch(getCars());
      return;
    }
    dispatch(setFilters(values));
    dispatch(getCarsFiltered(values));
  };

  return (
    <Formik
      initialValues={{
        brand: '',
        price: '',
        from: '',
        to: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <Label>
            Car brand
            <StyledField
              className="brand"
              name="brand"
              as="select"
              onChange={e => {
                setFieldValue(
                  'brand',
                  e.target.value === 'All' ? '' : e.target.value
                );
              }}
            >
              <option value="default" hidden>
                Enter brand
              </option>
              <option value="">All</option>
              {carBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </StyledField>
          </Label>
          <Label>
            Price/ 1 hour
            <StyledField
              className="price"
              name="price"
              as="select"
              onChange={e => {
                setFieldValue(
                  'price',
                  e.target.value === 'All' ? '' : e.target.value
                );
              }}
            >
              <option value="default" hidden>
                To $
              </option>
              <option value="">All</option>
              {pricePerHour.map(price => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </StyledField>
          </Label>
          <Label>
            Сar mileage / km
            <div>
              <StyledField
                type="text"
                className="from"
                name="from"
                placeholder="From"
              />
              <StyledField
                type="text"
                className="to"
                name="to"
                placeholder="To"
              />
            </div>
          </Label>
          <BtnSearch type="submit">Search</BtnSearch>
        </StyledForm>
      )}
    </Formik>
  );
};
