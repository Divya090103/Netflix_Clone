import react from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screen/Home";
import Signup from "./Screen/SignUp";
import Login from "./Screen/Login";
import Error from "./Screen/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign_up" element={<Signup />} />
          <Route path="Log_in" element={<Login />} />
          <Route element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
