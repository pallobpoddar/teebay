import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import AllProducts from "./components/pages/AllProducts";
import MyProducts from "./components/pages/MyProducts";
import ProductCreation from "./components/pages/ProductCreation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/users/:id/products" element={<MyProducts />} />
        <Route path="/products/creation" element={<ProductCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
