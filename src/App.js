import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
