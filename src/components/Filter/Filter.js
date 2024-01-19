import { Field, Form, Formik } from 'formik';
import carBrands from '../../data/makes.json';
import pricePerHour from '../../data/price.json';

export const Filter = () => {
  const handleSubmit = () => {};

  // const customStyles = {
  //   color: 'black',
  // };
  return (
    <Formik
      initialValues={{
        brand: '',
        price: '',
      }}
      // validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="brand">Car brand</label>
        <Field id="brand" name="brand" as="select">
          <option value="" label="Enter the text" />
          {carBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Field>
        <label htmlFor="price">Price/ 1 hour</label>
        <Field id="price" name="price" as="select">
          <option value="" label="To $" />
          {pricePerHour.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </Field>
        <label htmlFor="range">Сar mileage / km</label>
        <div>
          <Field type="text" id="from" name="from" placeholder="From" />
          <Field type="text" id="to" name="to" placeholder="To" />
        </div>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
