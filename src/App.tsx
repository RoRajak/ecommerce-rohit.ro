import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductMain from "./pages/product/ProductMain";
import LoginPage from "./pages/Signin/signin";
import SignUp from "./pages/Signup/Signup";
import Category from "./pages/category/Category";
import CartMain from "./pages/cart/CartMain";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductMain/>} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cart" element={<CartMain/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    
  );
}

export default App;
