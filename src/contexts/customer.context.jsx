import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  getCustomerDocument,
} from '../utils/firebase/firebase.utils';

export const CustomerContext = createContext({
  currentCustomer: {},
  setCurrentCustomer: () => null,
});

export const db = getFirestore();

export const CustomerProvider = ({ children }) => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const value = {
    currentCustomer,
    setCurrentCustomer,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        setTimeout(() => {
          const customer = getCustomerDocument(user);
          if (customer) {
            onSnapshot(doc(db, 'customers', user.uid), (doc) => {
              setCurrentCustomer({ userId: user.uid, customer: doc.data() });
            });
          }
        }, 500);
      } else {
        setCurrentCustomer(null);
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
