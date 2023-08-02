// Coloque aqui suas actions
import { CODE_ERROR, urlFetchAllCoinsAPI } from '../constants/generalConstants';
import {
  USER_DATA,
  EXPENSE_ACTION,
  CHANGE_EXPENSE,
  LOADING_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
  DELETE_EXPENSE } from './actionTypes';

export const actionUserData = (payload) => ({
  type: USER_DATA,
  payload,
});

export const actionExpense = (payload) => ({
  type: EXPENSE_ACTION,
  payload,
});

export const actionChangeExpense = (payload) => ({
  type: CHANGE_EXPENSE,
  payload,
});

export const sucessAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = () => ({
  type: ERROR_TYPE,
});

export const loadingAction = () => ({
  type: LOADING_TYPE,
});

export const fetchCoins = () => async (dispatch) => {
  dispatch(loadingAction());

  const requisicao = await (await fetch(urlFetchAllCoinsAPI)).json();

  if (requisicao.status && requisicao.status == CODE_ERROR) {
    return dispatch(errorAction(requisicao));
  }

  return dispatch(sucessAction(requisicao));
};

export const fetchExpenseAPI = (payload) => async (dispatch) => {
  try {
    const response = await fetch(urlFetchAllCoinsAPI);
    const result = await response.json();
    delete result.USDT;
    const expense = { ...payload, exchangeRates: result };

    return dispatch(actionChangeExpense(expense));
  } catch (error) {
    return dispatch(errorAction());
  }
};

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});
