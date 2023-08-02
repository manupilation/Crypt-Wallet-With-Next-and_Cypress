'use client'

import React from "react";
// import dynamic from "next/dynamic";
import { Provider } from 'react-redux';
import store from "../Store";
import Login from './login'
import Wallet from "./wallet";
import LoginPage from "./login";

function App() {
  return (
    <LoginPage />
  );
}

export default App;
