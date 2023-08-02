import React from 'react';
import { ExpenseForm, Header } from '../components';
import Table from '../components/Table';

function Wallet() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <Table />
      </div>
    );
}

export default Wallet;
