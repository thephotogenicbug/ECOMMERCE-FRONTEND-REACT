import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
