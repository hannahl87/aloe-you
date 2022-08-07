import * as _ from 'lodash';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context';
import './shop.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';
import AddedToBasket from '../../components/added-to-basket/added-component';

const Shop = () => {
  const location = useLocation();
  const type = location.pathname.split('/').pop() ?? null;
  const plantsCategory = 0;
  let { products } = useContext(ProductsContext);
  products = products[plantsCategory];
  let titles = Object.keys(_.groupBy(products, 'type'));
  if (type && type !== 'shop') {
    titles = [type];
    products = products.filter((o) => type === o.type.find((o) => o === type));
  }

  return (
    <div className='shop-page flex flex-col items-center mt-20 mx-14'>
      <AddedToBasket />
      {titles.map((title) => {
        const newProducts = products.filter((product) => {
          return product.type.includes(title);
        });
        return (
          <div key={title} className='collection-preview mt-3 md:mt-20 mx-14'>
            <h1 className='preview-title flex justify-center sm:justify-start ml-2 my-4'>
              {title.toUpperCase()}
            </h1>
            <div className='preview grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 content-center'>
              {newProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};;

export default Shop;
