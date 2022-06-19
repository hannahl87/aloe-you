import './basket-item.styles.scss';

const BasketItem = ({ basketItem }) => {
  const { name, imageUrl, price, quantity } = basketItem;

  return (
    <div className='basket-item flex my-1'>
      <div className='img-container'>
        <img
          className='basket-img flex justify-start rounded-sm'
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

export default BasketItem;
