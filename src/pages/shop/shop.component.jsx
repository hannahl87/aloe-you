import React from 'react';
import './shop.styles.css';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionprops }) => (
          <CollectionPreview key={id} {...otherCollectionprops} />
        ))}
      </div>
    );
  }
}

export default Shop;
