import React from 'react';
import { Provider } from 'react-redux';
import store from '../../Store';
import Wallet from '../../components/Wallet';

function WalletPage() {
    return (
      <Provider store={store}>
        <Wallet />
      </Provider>
    );
}

export default WalletPage;
