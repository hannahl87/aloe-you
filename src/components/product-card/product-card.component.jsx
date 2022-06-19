import { useContext } from 'react';
import { BasketContext } from '../../contexts/basket.context';
import FormButton from '../form-button/form-button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToBasket } = useContext(BasketContext);
  const addProductToBasket = () => addItemToBasket(product);

  return (
    <div className='collection-item flex flex-col mb-4 col-span-2 sm:col-span-1'>
      <div className='top-card flex justify-center rounded-t-xl'>
        <img
          src={imageUrl}
          alt={`${name}`}
          className='collection-img rounded-t-xl'
        />
      </div>
      <div className='collection-footer flex justify-between  rounded-b-xl p-2'>
        <span className='name text-white'>{name}</span>
        <span className='price'>£{price}</span>
        <FormButton onClick={addProductToBasket}>Add to basket</FormButton>
      </div>
    </div>
  );
};

export default ProductCard;
