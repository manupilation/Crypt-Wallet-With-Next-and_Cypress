import React from 'react';
import { ExpenseForm, Header } from '..';
import Table from '../Table';

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
