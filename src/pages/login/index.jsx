import React from 'react'
import { Provider } from "react-redux";
import store from "../../Store";
import Login from "../../components/Login";
import Meta from '../../infra/Meta';
import Head from 'next/head';

function LoginPage() {
  return (
    <Provider store={store}>
      <Meta />
      <Login />
    </Provider>
  );
};

export default LoginPage;
