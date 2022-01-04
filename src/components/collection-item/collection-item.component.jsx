import React from 'react';

import './collection-item.styles.css';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item flex flex-col mb-4 cursor-pointer hover:scale-105 col-span-1'>
    <div className='top-card flex justify-center rounded-t-xl'>
      <img
        src={imageUrl}
        alt='collection-img'
        className='collection-img rounded-t-xl'
      />
    </div>
    <div className='collection-footer flex justify -between rounded-b-xl p-2'>
      <span className='name text-white'>{name}</span>
      <span className='price'>£{price}</span>
    </div>
  </div>
);

export default CollectionItem;
