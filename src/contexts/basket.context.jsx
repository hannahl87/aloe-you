import { createContext, useState, useEffect } from 'react';

const addBasketItem = (basketItems, productToAdd) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === productToAdd.id
  );

  if (existingBasketItem) {
    basketItems = basketItems.map((basketItem) =>
      basketItem.id === productToAdd.id
        ? {
            ...basketItem,
            quantity: basketItem.quantity + 1,
          }
        : basketItem
    );
    return basketItems;
  }
  return [...basketItems, { ...productToAdd, quantity: 1 }];
};

const removeFromBasket = (basketItems, existingBasketItem) => {
  return basketItems.splice(basketItems.indexOf(existingBasketItem), 1);
};

const decreaseBasketItem = (basketItems, productToRemove) => {
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
    return basketItems;
  }
  removeFromBasket(basketItems, existingBasketItem);
  return [...basketItems];
};

export const BasketContext = createContext({
  isBasketOpen: false,
  setIsBasketOpen: () => {},
  basketItems: [],
  addItemToBasket: () => {},
  removeItem: () => {},
  basketTotal: 0,
});

export const BasketProvider = ({ children }) => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const addItemToBasket = (productToAdd) => {
    setBasketItems(addBasketItem(basketItems, productToAdd));
  };
  const removeItem = (productToRemove) => {
    setBasketItems(decreaseBasketItem(basketItems, productToRemove));
  };

  const clearBasket = () => {
    setBasketItems([]);
    setBasketTotal(0);
  };

  useEffect(() => {
    const newBasketTotal = basketItems.reduce(
      (total, basketItem) => (total += basketItem.price * basketItem.quantity),
      0
    );
    setBasketTotal(newBasketTotal);
  }, [basketItems]);

  const value = {
    isBasketOpen,
    setIsBasketOpen,
    basketItems,
    addItemToBasket,
    removeItem,
    basketTotal,
    clearBasket,
  };
  return (
    <BasketContext.Provider value={value}> {children} </BasketContext.Provider>
  );
};
