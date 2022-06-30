import { useContext } from 'react';
import { CustomerContext } from '../../contexts/customer.context';
import './orders-table.styles.scss';

const OrdersTable = () => {
  const { customerOrders } = useContext(CustomerContext);

  const convertDate = (date) => {
    const newDate = new Date(date * 1000).toLocaleDateString('en-gb');
    return newDate;
  };

  return (
    <div className='orders-table mt-6 w-full'>
      <h3 className='text-l font-bold flex justify-center my-6'>My Orders</h3>
      <table className='w-full border-1 border-cyan-300'>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order Total</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {customerOrders.length ? (
            customerOrders.map((order) => (
              <tr key={order.created}>
                <td>{convertDate(order.created)}</td>
                <td>£{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>You don't have any orders yet</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
