// import logo from './logo.svg';
import './App.css';

import HomePage from './routes/HomePage';
import LoginPage from "./routes/LoginPage"
import SignupPage from './routes/SignupPage'
import CartPage from './routes/CartPage'
import OrderPage from "./routes/OrderPage"


import { BrowserRouter,Routes,Route } from 'react-router-dom';
const login={
  ok:0,
  email:null,
}

function App() {
  return (
    <>

     <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<HomePage />}>   </Route>
            {/* <Route path="Home" element={<HomePage/>}></Route> */}
            <Route path="/Login" element={<LoginPage />}></Route>
            <Route path="/Signup" element={<SignupPage />}></Route>
            <Route path="/Cart" element={<CartPage />}></Route>
            <Route path="/Order" element={<OrderPage  />}></Route>
           
        </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
