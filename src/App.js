// import './screens/styles.css';
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import HomePage from './screens/HomePage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PaymentPage from './screens/PaymentPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './screens/Cart'; // Import the Cart component
import MyOrder from './screens/MyOrder';
import { CartProvider } from './components/ContextReducer';
import CashPayment from './screens/CashPayment';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/payment/cash" element={<CashPayment />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/cart" element={<Cart />} /> {/* Include the Cart component */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;




































