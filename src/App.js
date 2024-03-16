import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home"
import Cart from "./Cart"
import Review from './Components/Review';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Overview from './Components/Overview';


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Overview/>}/>
        <Route path='/order' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/review' element={<Review/>}/>
      
        

        

      </Routes>
      </BrowserRouter>
      
    </CartProvider>
    </>
  );
}

export default App;
