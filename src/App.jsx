import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign-in";
import SignUp from "./Pages/Sign-up";
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <>
       <Header/>       

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />     
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
