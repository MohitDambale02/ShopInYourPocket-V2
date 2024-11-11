import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {Provider} from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import store from './store.js';
// import 'bootstrap/dist/js/bootstrap.bundle.in.js';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';
import AdminRoutes from './components/AdminRoutes.jsx'
import PaymentScreens from './screens/PaymentScreens.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import OrderListScreen from './screens/adminScreens/OrderListScreen.jsx';
import ProductListScreen from './screens/adminScreens/ProductListScreen.jsx';
import UserListScreen from './screens/adminScreens/UserListScreen.jsx';
import ProductEditScreen from './screens/adminScreens/ProductEditScreen.jsx';
import UserEditScreen from './screens/adminScreens/UserEditScreen.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/search/:keyword' element={<HomeScreen/>}/>
      <Route path='/page/:pageNumber' element={<HomeScreen/>}/>
      <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      
      <Route path='' element={<AdminRoutes/>}>
      <Route path='/admin/orderlist' element={<OrderListScreen/>}/>
      <Route path='/admin/productlist' element={<ProductListScreen/>}/>
      <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>}/>
      <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
      <Route path='/admin/userlist' element={<UserListScreen/>}/>
      <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>


       </Route>

      <Route path='' element={<PrivateRoutes/>}>
      <Route path='/shipping' element={<ShippingScreen/>}/>
      <Route path='/payment' element={<PaymentScreens/>}/>
      <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
      <Route path='/order/:id' element={<OrderScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
