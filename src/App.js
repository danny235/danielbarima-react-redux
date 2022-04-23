import "./App.css";
import { Route, Routes  } from "react-router-dom";
import Products from "./routes/Products";
import ProductDetail from "./routes/ProductDetail";

function App() {
  return (
    <Routes>
      
        <Route exact path="/" element={<Products />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />

    </Routes>
  );
}

export default App;
