import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import LogIn from './pages/LogIn'
import SingUp from "./pages/SignUp";
import Home from "./pages/Home"

function App() {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
