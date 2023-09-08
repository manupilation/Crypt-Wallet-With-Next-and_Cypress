import React from 'react';
import { ExpenseForm, Header } from '..';
import Table from '../Table';
import styles from './style.module.scss';

function Wallet() {
    return (
      <div className={styles.walletWrapper}>
        <Header />
        <ExpenseForm />
        <Table />
      </div>
    );
}

export default Wallet;
