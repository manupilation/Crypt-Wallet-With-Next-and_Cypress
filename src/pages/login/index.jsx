import React from 'react'
import { Provider } from "react-redux";
import store from "../../Store";
import Login from "../../components/Login";

function LoginPage() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default LoginPage;
