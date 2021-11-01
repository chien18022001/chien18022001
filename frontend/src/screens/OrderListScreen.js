import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';

export default function OrderListScreen(props) {
  // const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders({}));
    // dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }));
  }, [dispatch, successDelete]);
// }, [dispatch, sellerMode, successDelete, userInfo._id]);
  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  return (
    <div>
      <h1>Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID Đơn</th>
          
              <th>Ngày</th>
              <th>Tổng</th>
          
              <th>Giao hàng</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
          
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>

                <td>
                {order.deliver !== "y" ? (
                          <span className="danger">Chưa giao</span>
                        ) : (
                          <span className="success">Đã giao</span>
                        )}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Chi tiết
                  </button>
                  {order.deliver !=="y" ? (
                           <button
                           type="button"
                           className="small success"
                           onClick={() => {
                             props.history.push(`orderdeliver/${order._id}`);
                           }}
                         >
                           Giao hàng
                         </button>
                        ) : (
                          <button
                          // type="button"
                          className="small danger"
                          // onClick={() => {
                          //   props.history.push(`orderdeliver/${order._id}`);
                          // }}
                        >
                          Giao hàng
                        </button>
                        )}
                 
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Xóa đơn
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
