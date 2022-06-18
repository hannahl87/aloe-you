import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './basket-card.component.scss';

const BasketCard = ({ item }) => {
  const { addItemToCart, removeItem } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(item);
  const removeProduct = () => removeItem(item);

  console.log('item :', item);
  return (
    <div className='basket-card flex m-4'>
      <img
        src={item.imageUrl}
        alt={item.name}
        className='item-img rounded-xl h-60 mr-4'
      />
      <div className='details flex flex-col'>
        <h3 className='item-name'>{item.name}</h3>
        <div className='price'>£{item.price}</div>
        <div className='quantity'>
          Quantity:
          <button onClick={removeProduct} className='minus m-2'>
            {' '}
            -{' '}
          </button>
          {item.quantity}
          <button onClick={addProductToCart} className='plus m-2'>
            {' '}
            +{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
