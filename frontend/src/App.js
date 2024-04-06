import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Result from "./components/result/Result";
import Attendence from "./components/attendence/Attendence";
import Dashboard from "./components/dashboard/Dashboard";
import { useState } from "react";
import { LoginForm } from "./components/signup/SignUp";

function App() {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    // Perform login logic here, e.g., set isLoggedIn to true
    setLogin(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here, e.g., set isLoggedIn to false
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {login == false ? (
          <Route path="/" element={<LoginForm />} />
        ) : (
          <>
            {/* <Route path='/' element = {<Home/>}/> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/allResult" element={<Result />} />
            <Route path="/attendance" element={<Attendence />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
