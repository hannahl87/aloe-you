import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import './basket-dropdown.styles.scss';
import BasketItem from '../basket-item/basket-item.component';
import CtaButton from '../cta-button/cta-button.component';

const BasketDropdown = () => {
  const { basketItems } = useContext(BasketContext);
  return (
    <div className='basket-dropdown flex flex-col items-center rounded-lg shadow-md absolute p-4'>
      <div className='basket-items flex flex-col overflow-scroll w-full'>
        {basketItems.map((item) => {
          return <BasketItem key={item.id} basketItem={item} />;
        })}
      </div>
      <CtaButton link='aloe-you/basket' text='Go to Basket' />
    </div>
  );
};

export default BasketDropdown;
