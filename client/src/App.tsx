import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import AllProducts from "./components/pages/AllProducts";
import MyProducts from "./components/pages/MyProducts";
import ProductCreation from "./components/pages/ProductCreation";
import ProductDetails from "./components/pages/ProductDetails";
import ProductUpdate from "./components/pages/ProductUpdate";
import TransactionHistory from "./components/pages/TransactionHistory";
import NonUserAuth from "./middleware/NonUserAuth";
import UserAuth from "./middleware/UserAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NonUserAuth />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route element={<UserAuth />}>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/users/:id/products" element={<MyProducts />} />
          <Route path="/products/creation" element={<ProductCreation />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/:id/update" element={<ProductUpdate />} />
          <Route
            path="/users/:id/products/history"
            element={<TransactionHistory />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
