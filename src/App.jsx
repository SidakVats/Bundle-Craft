import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header/>       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />     
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
