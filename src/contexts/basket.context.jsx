import { createContext, useState } from 'react';

const addBasketItem = (basketItems, productToAdd, total) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === productToAdd.id
  );

  if (existingBasketItem) {
    return (
      basketItems.map((basketItem) =>
        basketItem.id === productToAdd.id
          ? {
              ...basketItem,
              quantity: basketItem.quantity + 1,
            }
          : basketItem
      ),
      total + productToAdd.price
    );
  }

  return [...basketItems, { ...productToAdd, quantity: 1 }], total;
};

const removeBasketItem = (basketItems, productToRemove, total) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === productToRemove.id
  );

  if (existingBasketItem.quantity > 1) {
    basketItems = basketItems.map((basketItem) =>
      basketItem.id === productToRemove.id
        ? {
            ...basketItem,
            quantity: basketItem.quantity - 1,
          }
        : basketItem
    );
    total = total -= productToRemove.price;
    return basketItems, total;
  }
  basketItems.splice(basketItems.indexOf(existingBasketItem), 1);
  return [...basketItems, total];
};

// const basketTotal = (total, basketItems) => {
//   basketItems.forEach((item) => {
//     total += item.price * item.quantity;
//   });
//   console.log('total :', total);
//   return total;
// };

export const BasketContext = createContext({
  isBasketOpen: false,
  setIsBasketOpen: () => {},
  basketItems: [],
  addItemToBasket: () => {},
  removeItem: () => {},
  total: 0,
});

export const BasketProvider = ({ children }) => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems, total] = useState([]);

  const addItemToBasket = (productToAdd) => {
    setBasketItems(addBasketItem(basketItems, productToAdd));
  };
  const removeItem = (productToRemove) => {
    setBasketItems(removeBasketItem(basketItems, productToRemove));
  };
  // const getBasketTotal = () => {
  //   console.log('here !');
  //   setBasketTotal(basketTotal(basketItems));
  // };

  const value = {
    isBasketOpen,
    setIsBasketOpen,
    basketItems,
    addItemToBasket,
    removeItem,
    total,
  };
  return (
    <BasketContext.Provider value={value}> {children} </BasketContext.Provider>
  );
};
