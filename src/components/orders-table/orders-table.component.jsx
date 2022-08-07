import { useContext } from 'react';
import { CustomerContext } from '../../contexts/customer.context';
import './orders-table.styles.scss';

const OrdersTable = () => {
  const { customerOrders } = useContext(CustomerContext);
  console.log('customerOrders :', customerOrders);

  const convertDate = (date) => {
    const newDate = new Date(date * 1000).toLocaleDateString('en-gb');
    return newDate;
  };

  return (
    <div className='orders-table mt-6 w-full'>
      <h3 className='text-l font-bold flex justify-center my-6'>My Orders</h3>
      {customerOrders.length ? (
        <table className='w-full uppercase text-left'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customerOrders.map((order) => (
              <tr key={order.created}>
                <td>{convertDate(order.created)}</td>
                <td>£{order.amount}</td>
                <td
                  className={
                    order.status === 'succeeded' ? 'success' : 'failed'
                  }
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='no-orders'>You don't have any orders yet</div>
      )}
    </div>
  );
};

export default OrdersTable;
