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
import { selectFavorite } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import { useState } from 'react';
import { CardModal } from 'components/Modal/Modal';
import emptyImg from '../../images/car_no_image.jpg';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorite);
  const isFavorite = favorites.some(favorite => favorite.id === car.id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = car => {
    setSelectedCar(car);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <>
      <Item>
        <BtnAdd onClick={handleToggleFavorite}>
          {isFavorite ? (
            <svg width="24" height="24">
              <use xlinkHref={`${SpriteIcons}#heart2`} />
            </svg>
          ) : (
            <svg width="24" height="24">
              <use xlinkHref={`${SpriteIcons}#heart1`} />
            </svg>
          )}
        </BtnAdd>
        <Img src={car.img ? car.img : emptyImg} alt={car.make} />
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
      {isModalOpen && (
        <CardModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          car={selectedCar}
        />
      )}
    </>
  );
};
