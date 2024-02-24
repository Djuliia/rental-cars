import { Info, SpanTitle } from 'components/CarItem/CarItem.styled';
import {
  AddInfo,
  AddInfoItem,
  AddInfoList,
  BtnRental,
  Img,
  Span,
  Text,
  Title,
} from './Card.styled';
import { getCityFromAddress } from 'helpers';

export const Card = ({ car }) => {
  const conditions = car.rentalConditions.split('\n');
  return (
    <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <Img src={car.img} alt={`${car.make} ${car.model}`} />
      <Title>
        {car.make} <SpanTitle>{car.model}</SpanTitle>, {car.year}
      </Title>
      <Info>
        {`${getCityFromAddress(car.address)}  | Ukraine | Id: ${
          car.id
        } | Year: ${car.year} | Type: ${car.type}`}
      </Info>
      <Info>
        Fuel Consumption: {car.fuelConsumption} | Engine Size: {car.engineSize}
      </Info>
      <Text>{car.description}</Text>
      <AddInfo>Accessories and functionalities:</AddInfo>
      <Info>{car.accessories.join(' | ')}</Info>
      <AddInfo>Rental Conditions:</AddInfo>

      <AddInfoList>
        {conditions.map((condition, index) => (
          <AddInfoItem key={index}>
            {condition.includes('Minimum age') ? (
              <>
                Minimum age: <Span>{condition.split(':')[1]}</Span>
              </>
            ) : (
              condition
            )}
          </AddInfoItem>
        ))}
        <AddInfoItem>
          Mileage:&nbsp;<Span>{(car.mileage / 1000).toFixed(3)}</Span>
        </AddInfoItem>
        <AddInfoItem>
          Price:&nbsp;<Span>{car.rentalPrice}</Span>
        </AddInfoItem>
      </AddInfoList>

      <BtnRental to="tel:+380730000000">Rental car</BtnRental>
    </div>
  );
};
