import { useContext } from 'react';
import BasketCard from '../../components/basket-card/basket-card.component';
import { BasketContext } from '../../contexts/basket.context';
import './basket.component.scss';

const Basket = () => {
  const { basketItems } = useContext(BasketContext);
  console.log('basketItems :', basketItems);

  return (
    <div className='basket-page mt-20 mx-14'>
      {basketItems.map((item) => {
        return <BasketCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Basket;
