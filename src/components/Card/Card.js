import { BtnRental } from './Card.styled';

export const Card = ({ car }) => {
  // console.log(rentalConditions);
  // const conditions = rentalConditions.split('\n');
  return (
    <div>
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      <h2>
        {car.make} <span>{car.model}</span>, {car.year}
      </h2>
      <span>
        {`getCityFromAddress(address)  | Ukraine | id: {id} | Year: {year} | Type: {type}`}
      </span>
      <span>
        Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}
      </span>
      <p>{car.description}</p>
      <p>Accessories and functionalities:</p>
      {/* <span>{accessories.join(' | ')}</span> */}
      <p>Rental Conditions:</p>
      {/* {conditions.map((condition, index) => (
        <li key={index}>{condition}</li>
      ))} */}

      <span>Mileage:{}</span>
      <span>Price:{car.rentalPrice}</span>
      <BtnRental type="button">Rental car</BtnRental>
    </div>
  );
};
