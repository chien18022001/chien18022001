import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsOrder, deliverOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELIVER_RESET } from '../constants/orderConstants';


export default function OrderEditScreen(props) {
  const orderId = props.match.params.id;
  const [deliver, setDeliver] = useState('');
  // const orderList = useSelector((state) => state.orderList);

  // const {  order } = orderList;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    // loading: loadingDeliver,
    // error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDeliver) {
      props.history.push('/orderlist');
    }
    if (!order || order._id !== orderId || successDeliver) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      // if(order){
      setDeliver(order.deliver="y");
    //   setPrice(product.price);
    //   setImage(product.image);
    //   setCategory(product.category);
    //   setCountInStock(product.countInStock);
    //   setBrand(product.brand);
    //   setDescription(product.description);
    }
  }, [order, dispatch , orderId,  successDeliver, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
        deliverOrder({
          _id:orderId,
        // _id: productId,
        // name,
        // price,
        // image,
        // category,
        // brand,
        // countInStock,
        // description,
        deliver,
      })
    );
    // props.history.push('/orderlist');
  };
  // const [loadingDeliver, setLoadingDeliver] = useState(false);
  // const [errorDeliver, setErrorDeliver] = useState('');

//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const uploadFileHandler = async (e) => {
    // const file = e.target.files[0].name;
    // const bodyFormData = new FormData();
    // bodyFormData.append('image', file);
    // setLoadingUpload(true);
    // try {
    //   const { data } = await Axios.post('/api/uploads', {
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   Authorization: `Bearer ${userInfo.token}`,
        // },
    //   });
    //   setImage(data);
    //   setLoadingUpload(false);
    // } catch (error) {
    //   setErrorUpload(error.message);
    //   setLoadingUpload(false);
    // }
//   };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Hãy nhấn nút nếu bạn đã giao hàng (mã đơn đơn hàng {orderId} )</h1>
        </div>
        {/* {loadingDeliver && <LoadingBox></LoadingBox>} */}
        {/* {errorDeliver && <MessageBox variant="danger">{errorDeliver}</MessageBox>} */}
        {/* {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : ( */}
          <>
            {/* <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div> */}
            {/* <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div> */}
            {/* <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={ image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div> */}
            {/* <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div> */}
            {/* <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div> */}
            {/* <div>
              <label htmlFor="deliver">deliver</label>
              <input
                id="deliver"
                // rows="3"
                type="text"
                placeholder="Enter deliver"
              value={deliver}
                onChange={(e) => setDeliver(e.target.value)}
              ></input>
            </div> */}
            <div>
              <label></label>
              <button className="primary" type="submit">
                Đã giao
              </button>
            </div>
          </>
        
      </form>
    </div>
  );
}
