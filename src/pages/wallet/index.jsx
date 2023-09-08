import React from 'react';
import { Provider } from 'react-redux';
import store from '../../Store';
import Wallet from '../../components/Wallet';
import Meta from '../../infra/Meta';

function WalletPage() {
    return (
      <Provider store={store}>
        <Meta 
          title="Crypt Wallet - Your Wallet" 
          description="Manage your personal Wallet"
        />
        <Wallet />
      </Provider>
    );
}

export default WalletPage;
