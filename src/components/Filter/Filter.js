import { Formik } from 'formik';
import carBrands from '../../data/makes.json';
import pricePerHour from '../../data/price.json';
import { BtnSearch, Label, StyledField, StyledForm } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setBrand, setMileageRange, setPrice } from '../../redux/filterSlice';
// import { getCars } from '../../redux/operations';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(setBrand(values.brand));
    dispatch(setPrice(values.price));
    dispatch(setMileageRange({ from: values.from, to: values.to }));
    console.log(values);

    resetForm();
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
                setFieldValue('brand', e.target.value);
              }}
            >
              <option value="default" hidden>
                Enter brand
              </option>
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
                setFieldValue('price', e.target.value);
              }}
            >
              <option value="default" hidden>
                To $
              </option>
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
                placeholder="From 1000"
              />
              <StyledField
                type="text"
                className="to"
                name="to"
                placeholder="To 40000"
              />
            </div>
          </Label>
          <BtnSearch type="submit">Search</BtnSearch>
        </StyledForm>
      )}
    </Formik>
  );
};
