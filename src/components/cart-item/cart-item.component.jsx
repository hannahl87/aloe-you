import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='cart-item flex my-1'>
      <div className='img-container'>
        <img
          className='cart-img flex justify-start rounded-sm'
          src={imageUrl}
          alt='item'
        />
      </div>

      <div className='flex flex-col w-full ml-2 justify-center'>
        <h2 className='name text-sm'>{name}</h2>
        <span className='price text-xs'> £{price}</span>
        <span className='quantity text-xs'>Oty: {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
