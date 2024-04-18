import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header/>       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />     
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
