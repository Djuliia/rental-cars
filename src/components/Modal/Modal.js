import { Card } from 'components/CardModal/Card';
import Modal from 'react-modal';
import SpriteIcons from '../../images/sprite.svg';
import { BtnClose } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    padding: '40px',

    borderRadius: '24px',
    width: '541px',
    height: '752px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
Modal.setAppElement('#root');

export const CardModal = ({ isOpen, onRequestClose, car }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div>
        <BtnClose type="button" onClick={onRequestClose}>
          <svg width="24" height="24" stroke="#121417" fill="none">
            <use xlinkHref={`${SpriteIcons}#x`} />
          </svg>
        </BtnClose>
        <Card car={car} />
      </div>
    </Modal>
  );
};
