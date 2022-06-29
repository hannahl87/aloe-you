import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  getCustomerDocument,
} from '../utils/firebase/firebase.utils';

export const CustomerContext = createContext({
  currentCustomer: {},
  setCurrentCustomer: () => null,
});

export const CustomerProvider = ({ children }) => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const value = {
    currentCustomer,
    setCurrentCustomer,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log('user 11111:', user);
      if (user) {
        const customer = await getCustomerDocument(user);
        if (customer) {
          console.log('cust test:', customer.data());
          setCurrentCustomer(customer.data());
        }
      }
    });

    return unsubscribe;
  }, []);

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};
