import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/AboutPage";
import Basket from "./pages/basketPage";
import Contact from "./pages/ContactPage";
import Home from "./pages/HomePage";
import Sign_up from "./pages/Sign-upPage";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/LoginPage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<Sign_up />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
