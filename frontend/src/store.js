import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
  orderSummaryReducer,
} from './reducers/orderReducers';
import {
  productCategoryListReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productReviewCreateReducer,
  productUpdateReducer,
} from './reducers/productReducers';
// import {
//   userAddressMapReducer,
//   userDeleteReducer,
//   userDetailsReducer,
//   userListReducer,
//   // userRegisterReducer,
//   userSigninReducer,
//   // userTopSellerListReducer,
//   userUpdateProfileReducer,
//   userUpdateReducer,
// } from './reducers/userReducers';

const storelocalStorage = {
  // userSignin: {
  //   userInfo: localStorage.getItem('userInfo')
  //     ? JSON.parse(localStorage.getItem('userInfo'))
  //     : null,
  // },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  // userSignin: userSigninReducer,
  // userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,
  productReviewCreate: productReviewCreateReducer,
  // userAddressMap: userAddressMapReducer,
  orderSummary: orderSummaryReducer,
});
// kiểm tra sự tồn tại của Redux Dev Tools và add nó vào phục vụ quá trình debug
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// khởi tạo store sử dụng API của Redux, ở đây có sử dụng thêm redux-thunk để đơn giản hoá việc xử lý HTTP API
const store = createStore(
  reducer,
  storelocalStorage,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;




// register:  userrouter, useraction , loaddingbox, userconstans, registerScreen ,signinScreen 
//import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { createProduct } from '../actions/productActions';



// export default function RegisterScreen(props) {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState('');
//     const [category, setCategory] = useState('');
//     const [countInStock, setCountInStock] = useState('');
//     const [brand, setBrand] = useState('');
//     const [description, setDescription] = useState('');

// //   const redirect = props.location.search
// //     ? props.location.search.split('=')[1]
// //     : '/';

//   const productCreate = useSelector((state) => state.productCreate);
//   const {  loading, error } = productCreate;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // TODO: dispatch update product
//     dispatch(
//       createProduct({
//         // _id: productId,
//         name,
//         price,
//         image,
//         category,
//         brand,
//         countInStock,
//         description,
//       })
//     );
//   };
//   useEffect(() => {
//     // if (userInfo) {
//     //   props.history.push(`/productlist`);
//     // }
//   }, [props.history,]);
//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>Edit Product </h1>
//         </div>
//         {/* {loadingUpdate && <LoadingBox></LoadingBox>}
//         {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>} */}
//         {loading ? (
//           <LoadingBox></LoadingBox>
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 placeholder="Enter name"
//                 // value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="price">Price</label>
//               <input
//                 id="price"
//                 type="text"
//                 placeholder="Enter price"
//                 // value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="image">Image</label>
//               <input
//                 id="image"
//                 type="text"
//                 placeholder="Enter image"
//                 // value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               ></input>
//             </div>
//             {/* <div>
//               <label htmlFor="imageFile">Image File</label>
//               <input
//                 type="file"
//                 id="imageFile"
//                 label="Choose Image"
//                 onChange={uploadFileHandler}
//               ></input>
//               {loadingUpload && <LoadingBox></LoadingBox>}
//               {errorUpload && (
//                 <MessageBox variant="danger">{errorUpload}</MessageBox>
//               )}
//             </div> */}
//             <div>
//               <label htmlFor="category">Category</label>
//               <input
//                 id="category"
//                 type="text"
//                 placeholder="Enter category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="brand">Brand</label>
//               <input
//                 id="brand"
//                 type="text"
//                 placeholder="Enter brand"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="countInStock">Count In Stock</label>
//               <input
//                 id="countInStock"
//                 type="text"
//                 placeholder="Enter countInStock"
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="3"
//                 type="text"
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div>
//               <label></label>
//               <button className="primary" type="submit">
//                 Update
//               </button>
//             </div>
//           </>
//         )}
//       </form>
//     </div>
//   );
// }



// router 
// import express from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import data from '../data.js';
// import Product from '../models/productModel.js';
// import User from '../models/userModel.js';
// import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

// const productRouter = express.Router();

// productRouter.get(
//   '/',
//   expressAsyncHandler(async (req, res) => {
//     const pageSize = 3;
//     const page = Number(req.query.pageNumber) || 1;
//     const name = req.query.name || '';
//     const category = req.query.category || '';
//     const seller = req.query.seller || '';
//     const order = req.query.order || '';
//     const min =
//       req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
//     const max =
//       req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
//     const rating =
//       req.query.rating && Number(req.query.rating) !== 0
//         ? Number(req.query.rating)
//         : 0;

//     const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
//     const sellerFilter = seller ? { seller } : {};
//     const categoryFilter = category ? { category } : {};
//     const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
//     const ratingFilter = rating ? { rating: { $gte: rating } } : {};
//     const sortOrder =
//       order === 'lowest'
//         ? { price: 1 }
//         : order === 'highest'
//         ? { price: -1 }
//         : order === 'toprated'
//         ? { rating: -1 }
//         : { _id: -1 };
//     const count = await Product.count({
//       ...sellerFilter,
//       ...nameFilter,
//       ...categoryFilter,
//       ...priceFilter,
//       ...ratingFilter,
//     });
//     const products = await Product.find({
//       ...sellerFilter,
//       ...nameFilter,
//       ...categoryFilter,
//       ...priceFilter,
//       ...ratingFilter,
//     })
//       .populate('seller', 'seller.name seller.logo')
//       .sort(sortOrder)
//       .skip(pageSize * (page - 1))
//       .limit(pageSize);
//     res.send({ products, page, pages: Math.ceil(count / pageSize) });
//   })
// );

// productRouter.get(
//   '/categories',
//   expressAsyncHandler(async (req, res) => {
//     const categories = await Product.find().distinct('category');
//     res.send(categories);
//   })
// );

// productRouter.get(
//   '/seed',
//   expressAsyncHandler(async (req, res) => {
//     // await Product.remove({});
//     const seller = await User.findOne({ isSeller: true });
//     if (seller) {
//       const products = data.products.map((product) => ({
//         ...product,
//         seller: seller._id,
//       }));
//       const createdProducts = await Product.insertMany(products);
//       res.send({ createdProducts });
//     } else {
//       res
//         .status(500)
//         .send({ message: 'No seller found. first run /api/users/seed' });
//     }
//   })
// );

// productRouter.get(
//   '/:id',
//   expressAsyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id).populate(
//       'seller',
//       'seller.name seller.logo seller.rating seller.numReviews'
//     );
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   })
// );

// productRouter.post(
//   '/productcreate',
//   isAuth,
//   isSellerOrAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const product = new Product({
//       name:  req.body.name,
//       seller: req.user._id,
//       image: req.body.image,
//       price: req.body.price,
//       category: req.body.category,
//       brand: req.body.brand,
//       countInStock: req.body.countInStock,
//       // rating: req.body.rating,
//       numReviews: req.body.numReviews,
//       description: req.body.description,
//     });
//     const createdProduct = await product.save();
//     res.send({name: createdProduct.name,
//       seller: createdProduct.seller,
//       image: createdProduct.image,
//       price: createdProduct.price,
//       category: createdProduct.category,
//       brand: createdProduct.brand,
//       countInStock: createdProduct.countInStock ,
//       // rating: createdProduct.rating,
//       numReviews: createdProduct.numReviews,
//       description: createdProduct.description});
//   })
// );
// productRouter.put(
//   '/:id',
//   isAuth,
//   isSellerOrAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const productId = req.params.id;
//     const product = await Product.findById(productId);
//     if (product) {
//       product.name = req.body.name;
//       product.price = req.body.price;
//       product.image = req.body.image;
//       product.category = req.body.category;
//       product.brand = req.body.brand;
//       product.countInStock = req.body.countInStock;
//       product.description = req.body.description;
//       const updatedProduct = await product.save();
//       res.send({ message: 'Product Updated', product: updatedProduct });
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   })
// );

// productRouter.delete(
//   '/:id',
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       const deleteProduct = await product.remove();
//       res.send({ message: 'Product Deleted', product: deleteProduct });
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   })
// );

// productRouter.post(
//   '/:id/reviews',
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const productId = req.params.id;
//     const product = await Product.findById(productId);
//     if (product) {
//       if (product.reviews.find((x) => x.name === req.user.name)) {
//         return res
//           .status(400)
//           .send({ message: 'You already submitted a review' });
//       }
//       const review = {
//         name: req.user.name,
//         rating: Number(req.body.rating),
//         comment: req.body.comment,
//       };
//       product.reviews.push(review);
//       product.numReviews = product.reviews.length;
//       product.rating =
//         product.reviews.reduce((a, c) => c.rating + a, 0) /
//         product.reviews.length;
//       const updatedProduct = await product.save();
//       res.status(201).send({
//         message: 'Review Created',
//         review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
//       });
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   })
// );

// export default productRouter;




// // actions
// import Axios from 'axios';
// import {
//   PRODUCT_CREATE_FAIL,
//   PRODUCT_CREATE_REQUEST,
//   PRODUCT_CREATE_SUCCESS,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_DETAILS_REQUEST,
//   PRODUCT_DETAILS_SUCCESS,
//   PRODUCT_LIST_FAIL,
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_UPDATE_REQUEST,
//   PRODUCT_UPDATE_SUCCESS,
//   PRODUCT_UPDATE_FAIL,
//   PRODUCT_DELETE_REQUEST,
//   PRODUCT_DELETE_FAIL,
//   PRODUCT_DELETE_SUCCESS,
//   PRODUCT_CATEGORY_LIST_SUCCESS,
//   PRODUCT_CATEGORY_LIST_REQUEST,
//   PRODUCT_CATEGORY_LIST_FAIL,
//   PRODUCT_REVIEW_CREATE_REQUEST,
//   PRODUCT_REVIEW_CREATE_SUCCESS,
//   PRODUCT_REVIEW_CREATE_FAIL,
// } from '../constants/productConstants';

// // danh sach san pham 
// export const listProducts = ({
//   pageNumber = '',
//   seller = '',
//   name = '',
//   category = '',
//   order = '',
//   min = 0,
//   max = 0,
//   rating = 0,
// }) => async (dispatch) => {
//   dispatch({
//     type: PRODUCT_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(
//       `/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
//     );
//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//   }
// };

// export const listProductCategories = () => async (dispatch) => {
//   dispatch({
//     type: PRODUCT_CATEGORY_LIST_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get(`/api/products/categories`);
//     dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
//   }
// };

// export const detailsProduct = (productId) => async (dispatch) => {
//   dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
//   try {
//     const { data } = await Axios.get(`/api/products/${productId}`);
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const createProduct = (name,
//   seller,
//   image,
//   price,
//   category,
//   brand,
//   countInStock,
//   // rating,
//   numReviews,
//   description,) => async (dispatch,getState) => {
//   dispatch({ type: PRODUCT_CREATE_REQUEST, });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       '/api/products/productcreate',
//       {name,
//         seller,
//         image,
//         price,
//         category,
//         brand,
//         countInStock,
//         // rating,
//         numReviews,
//         description,},
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_CREATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// export const updateProduct = (product) => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.put(`/api/products/${product._id}`, product, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
//   }
// };
// export const deleteProduct = (productId) => async (dispatch, getState) => {
//   dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = Axios.delete(`/api/products/${productId}`, {
//       headers: { Authorization: `Bearer ${userInfo.token}` },
//     });
//     dispatch({ type: PRODUCT_DELETE_SUCCESS });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
//   }
// };
// export const createReview = (productId, review) => async (
//   dispatch,
//   getState
// ) => {
//   dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
//   const {
//     userSignin: { userInfo },
//   } = getState();
//   try {
//     const { data } = await Axios.post(
//       `/api/products/${productId}/reviews`,
//       review,
//       {
//         headers: { Authorization: `Bearer ${userInfo.token}` },
//       }
//     );
//     dispatch({
//       type: PRODUCT_REVIEW_CREATE_SUCCESS,
//       payload: data.review,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
//   }
// };



// // screen
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { createProduct } from '../actions/productActions';



// export default function RegisterScreen(props) {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState('');
//     const [category, setCategory] = useState('');
//     const [countInStock, setCountInStock] = useState('');
//     const [brand, setBrand] = useState('');
//     const [description, setDescription] = useState('');

//   const redirect = props.location.search
//     ? props.location.search.split('=')[1]
//     : '/';

//   const productCreate = useSelector((state) => state.productCreate);
//   const { userInfo, loading, error } = productCreate;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // TODO: dispatch update product
//     dispatch(
//       createProduct({
//         // _id: productId,
//         name,
//   // seller,
//   image,
//   price,
//   category,
//   brand,
//   countInStock,
//   // rating,
//   // numReviews,
//   description,
//       })
//     );
//   };
//   useEffect(() => {
//     if (userInfo) {
//       props.history.push(redirect);
//     }
//   }, [props.history,redirect, userInfo]);
//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>Edit Product </h1>
//         </div>
//         {/* {loadingUpdate && <LoadingBox></LoadingBox>}
//         {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>} */}
//         {loading ? (
//           <LoadingBox></LoadingBox>
//         ) : error ? (
//           <MessageBox variant="danger">{error}</MessageBox>
//         ) : (
//           <>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 placeholder="Enter name"
//                 // value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="price">Price</label>
//               <input
//                 id="price"
//                 type="text"
//                 placeholder="Enter price"
//                 // value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="image">Image</label>
//               <input
//                 id="image"
//                 type="text"
//                 placeholder="Enter image"
//                 // value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               ></input>
//             </div>
//             {/* <div>
//               <label htmlFor="imageFile">Image File</label>
//               <input
//                 type="file"
//                 id="imageFile"
//                 label="Choose Image"
//                 onChange={uploadFileHandler}
//               ></input>
//               {loadingUpload && <LoadingBox></LoadingBox>}
//               {errorUpload && (
//                 <MessageBox variant="danger">{errorUpload}</MessageBox>
//               )}
//             </div> */}
//             <div>
//               <label htmlFor="category">Category</label>
//               <input
//                 id="category"
//                 type="text"
//                 placeholder="Enter category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="brand">Brand</label>
//               <input
//                 id="brand"
//                 type="text"
//                 placeholder="Enter brand"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="countInStock">Count In Stock</label>
//               <input
//                 id="countInStock"
//                 type="text"
//                 placeholder="Enter countInStock"
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="3"
//                 type="text"
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <div>
//               <label></label>
//               <button className="primary" type="submit">
//                 Update
//               </button>
//             </div>
//           </>
//         )}
//       </form>
//     </div>
//   );
// }
