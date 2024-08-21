import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screen/Home";
import Signup from "./Screen/SignUp";
import Login from "./Screen/Login";
import Error from "./Screen/Error";
import Footer from "./Component/Footer";
import Signup2 from "./Component/Signup2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import bootstrap js
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Replace with your actual dark theme CSS
import Password from "./Component/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign_up" element={<Signup />} />
          <Route path="Log_in" element={<Login />} />
          <Route path="/Sign" element={<Signup2/>}/>
          <Route path="/password_change" element={<Password/>}/>
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
