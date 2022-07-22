import './App.css';
import { ThemeProvider } from '@mui/material';
import theme, { } from './Styles/Styles';
import Home from './Pages/Home/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Account/Login/Login';
import Register from './Pages/Account/Register/Register';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import ViewCart from './Pages/Cart/ViewCart/ViewCart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import OrderPlaced from './Pages/OrderPlaced/OrderPlaced';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/Dashboard/AllProducts/AllProducts';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Orders from './Pages/Dashboard/Orders/Orders';
import { createContext, useState } from 'react';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import NotFound from './Pages/NotFound/NotFound';

export const CartContext = createContext();
export const ProductContext = createContext();

function App() {

  const [cartValue, setCartValue] = useState([]);
  const [products, setProducts] = useState([]);


  return (
    <CartContext.Provider value={[cartValue, setCartValue]}>
      {/* <ProductContext.Provider value={[products, setProducts]}> */}
      <div className="App">
        <ThemeProvider theme={theme}>

          <Routes>
            <Route path='*' element={<NotFound />}></Route>
            <Route path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/shop' element={<Shop></Shop>} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/viewcart' element={<ViewCart />} />
            <Route path='/placeorder' element={<RequireAuth><PlaceOrder /></RequireAuth>} />
            <Route path='/orderplaced/:id' element={<RequireAuth><OrderPlaced /></RequireAuth>} />
            <Route path='dashboard' element={<AdminRoute><Dashboard /></AdminRoute>}>
              <Route path='dashboardhome' element={<DashboardHome></DashboardHome>}></Route>
              <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='allproducts' element={<AllProducts />}></Route>
              <Route path='addproducts' element={<AddProducts />}></Route>
              <Route path='orders' element={<Orders />}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
          </Routes>

        </ThemeProvider>
      </div>
      {/* </ProductContext.Provider> */}
    </CartContext.Provider>
  );
}

export default App;
