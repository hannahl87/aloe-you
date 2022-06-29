import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { BasketProvider } from './contexts/basket.context';
import { ProductsProvider } from './contexts/products.context';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import store from './redux/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import { CustomerProvider } from './contexts/customer.context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter basename={'/'}>
      <React.StrictMode>
        <UserProvider>
          <ProductsProvider>
            <BasketProvider>
              <Elements stripe={stripePromise}>
                <CustomerProvider>
                  <App />
                </CustomerProvider>
              </Elements>
            </BasketProvider>
          </ProductsProvider>
        </UserProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
