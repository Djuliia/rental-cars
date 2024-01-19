import { getCityFromAddress } from 'helpers';
import SpriteIcons from '../../images/sprite.svg';
import { BtnAdd, BtnLearnMore, Img, Item } from './CarItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteId } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';

export const CarItem = ({ car, openModal }) => {
  const dispatch = useDispatch();
  const favoriteIdx = useSelector(selectFavoriteId);

  const handleToggleFavorite = car => {
    const cardId = car.id;
    if (favoriteIdx.includes(cardId)) {
      dispatch(removeFavorite(cardId));
    } else {
      dispatch(addFavorite(cardId));
    }
  };

  return (
    <Item>
      <BtnAdd onClick={() => handleToggleFavorite(car)}>
        <svg
          width="24"
          height="24"
          fill={favoriteIdx.includes(car.id) ? '#3470FF' : 'none'}
        >
          <use xlinkHref={`${SpriteIcons}#heart`} />
        </svg>
      </BtnAdd>
      <Img src={car.img} alt={car.make} />
      <div>
        <p>
          {car.make} <span>{car.model}</span>, {car.year}
        </p>
        <span> {car.rentalPrice}</span>
      </div>
      <div>
        <span>{`${getCityFromAddress(car.address)} | Ukraine | ${
          car.rentalCompany
        }`}</span>
        <span>{`${car.type} | ${car.make} | ${car.id} | ${car.functionalities[0]}`}</span>
      </div>
      <BtnLearnMore onClick={() => openModal(car)}>Learn more</BtnLearnMore>
    </Item>
  );
};
