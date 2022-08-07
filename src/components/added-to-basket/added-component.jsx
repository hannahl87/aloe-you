import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import './added.styles.scss';

const AddedToBasket = () => {
  const { addingToBasket } = useContext(BasketContext);
  return (
    <div className={addingToBasket ? 'added-bubble rounded-lg' : 'hidden'}>
      Added to basket
    </div>
  );
};

export default AddedToBasket;
