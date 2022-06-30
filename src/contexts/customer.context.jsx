import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  getCustomerDocument,
  getOrders,
} from '../utils/firebase/firebase.utils';

export const CustomerContext = createContext({
  currentCustomer: {},
  setCurrentCustomer: () => null,
  customerOrders: [],
  setCustomerOrders: () => [],
});

export const db = getFirestore();

export const CustomerProvider = ({ children }) => {
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [customerOrders, setCustomerOrders] = useState([]);
  const value = {
    currentCustomer,
    setCurrentCustomer,
    customerOrders,
    setCustomerOrders,
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
            getOrders(user.uid).then((res) => {
              setCustomerOrders(res);
            });
          }
        }, 500);
      } else {
        setCurrentCustomer(null);
        setCustomerOrders([]);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};;
