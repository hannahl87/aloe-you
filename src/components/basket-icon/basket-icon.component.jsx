import './basket-icon.styles.scss';
import { connect } from 'react-redux';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

import { toggleBasketHidden } from '../../redux/basket/basket.actions';
import { BasketContext } from '../../contexts/basket.context';

const BasketIcon = () => {
  const { basketItems, isBasketOpen, setIsBasketOpen } =
    useContext(BasketContext);

  const toggleBasketOpen = () => setIsBasketOpen(!isBasketOpen);

  const getQuantity = () => {
    let quantity = 0;
    basketItems.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  return (
    <div
      onClick={toggleBasketOpen}
      className='basket-icon relative flex items-end hover:scale-125 cursor-pointer'
    >
      <ShoppingIcon />
      <span className='count absolute'>
        {getQuantity() < 1 ? '' : getQuantity()}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleBasketHidden: () => dispatch(toggleBasketHidden()),
});

export default connect(null, mapDispatchToProps)(BasketIcon);
