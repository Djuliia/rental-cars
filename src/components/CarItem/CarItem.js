import { getCityFromAddress } from 'helpers';
import SpriteIcons from '../../images/sprite.svg';
import {
  BtnAdd,
  BtnLearnMore,
  Img,
  Item,
  TitleWrap,
  SpanTitle,
  Info,
} from './CarItem.styled';
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
        <svg fill={favoriteIdx.includes(car.id) ? '#3470FF' : 'none'}>
          <use xlinkHref={`${SpriteIcons}#heart`} />
        </svg>
      </BtnAdd>
      <Img src={car.img} alt={car.make} />
      <div>
        <TitleWrap>
          <p>
            {car.make} <SpanTitle>{car.model}</SpanTitle>, {car.year}
          </p>
          <span> {car.rentalPrice}</span>
        </TitleWrap>
      </div>
      <div>
        <Info>{`${getCityFromAddress(car.address)} | Ukraine | ${
          car.rentalCompany
        }`}</Info>
        <Info>{`${car.type} | ${car.make} | ${car.id}`}</Info>
      </div>
      <BtnLearnMore onClick={() => openModal(car)}>Learn more</BtnLearnMore>
    </Item>
  );
};
