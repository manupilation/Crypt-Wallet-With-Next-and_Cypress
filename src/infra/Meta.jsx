import React from 'react';
import Head from 'next/head';
import { cryptoWalletWords } from '../constants/generalConstants';

const Meta = (props) => {
  const {title, description} = props;

  return (
    <Head>
      <title>{title ? title : 'CryptWallet - Welcome!'}</title>
      <meta
        name='description' 
        content={description ? description : "Welcome to your personal Crypt-Wallet!"}
      />
      <meta
        name='keywords'
        content={cryptoWalletWords.join(", ")}
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </Head>
  );
}

export default Meta;
