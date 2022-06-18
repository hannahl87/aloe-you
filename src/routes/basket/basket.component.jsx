import { useContext } from 'react';
import BasketCard from '../../components/basket-card/basket-card.component';
import { CartContext } from '../../contexts/cart.context';
import './basket.component.scss';

const Basket = () => {
  const { cartItems } = useContext(CartContext);
  console.log('cartItems :', cartItems);

  return (
    <div className='basket-page mt-20 mx-14'>
      {cartItems.map((item) => {
        return <BasketCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Basket;
