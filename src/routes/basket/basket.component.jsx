import { useContext } from 'react';
import BasketCard from '../../components/basket-card/basket-card.component';
import { BasketContext } from '../../contexts/basket.context';
import './basket.component.scss';

const Basket = () => {
  const { basketItems, basketTotal } = useContext(BasketContext);

  return (
    <div className='basket-page mt-20 mx-14'>
      <div className='items'>
        {basketItems.map((item) => {
          return <BasketCard key={item.id} item={item} />;
        })}
      </div>
      <div className='total flex justify-end'>Total: £{basketTotal}</div>
    </div>
  );
};

export default Basket;
