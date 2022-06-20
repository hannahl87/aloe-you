import { useContext, useEffect } from 'react';
import BasketCard from '../../components/basket-card/basket-card.component';
import CtaButton from '../../components/cta-button/cta-button.component';
import { BasketContext } from '../../contexts/basket.context';
import './basket.styles.scss';

const Basket = () => {
  const { basketItems, basketTotal, setIsBasketOpen } =
    useContext(BasketContext);

  useEffect(() => {
    setIsBasketOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='basket-page mt-20 mx-14'>
      {basketItems.length ? (
        <>
          <div className='items'>
            {basketItems.map((item) => {
              return <BasketCard key={item.id} item={item} />;
            })}
          </div>
          <div className='basket-total flex justify-center'>
            <h2 className='total self-center mr-4'>Total: £{basketTotal}</h2>
            <CtaButton link={'/checkout'} text='Go to Checkout'></CtaButton>
          </div>
        </>
      ) : (
        <div className='empty-basket'>
          You don't have any products in your basket
        </div>
      )}
    </div>
  );
};

export default Basket;
