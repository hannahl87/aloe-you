import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import './basket-card.styles.scss';

const BasketCard = ({ item }) => {
  const { addItemToBasket, removeItem } = useContext(BasketContext);
  const addProductToBasket = () => addItemToBasket(item);
  const removeProduct = () => removeItem(item);

  return (
    <div className='basket-card flex m-4'>
      <img
        src={item.imageUrl}
        alt={item.name}
        className='item-img rounded-xl h-44 md:h-60 mr-4'
      />
      <div className='details flex flex-col'>
        <h3 className='item-name'>{item.name}</h3>
        <div className='quantity'>
          Quantity:
          <button onClick={removeProduct} className='minus m-2'>
            {' '}
            -{' '}
          </button>
          {item.quantity}
          <button onClick={addProductToBasket} className='plus m-2'>
            {' '}
            +{' '}
          </button>
        </div>
        <div className='price'>£{item.price * item.quantity}</div>
      </div>
    </div>
  );
};

export default BasketCard;
