'use client'

import React from "react";
import LoginPage from "./login";
import MyApp from "./_app";

function App() {
  return (
    <MyApp Component={LoginPage}/>
  );
}

export default App;
