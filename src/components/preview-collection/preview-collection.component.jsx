import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview mt-20 mx-14'>
    <h1 className='preview-title ml-2 my-4'>{title.toUpperCase()}</h1>
    <div className='preview grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
