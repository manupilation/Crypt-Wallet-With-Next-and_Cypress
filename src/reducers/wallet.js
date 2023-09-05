// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  EXPENSE_ACTION,
  CHANGE_EXPENSE,
  LOADING_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
  DELETE_EXPENSE,
  TOGGLE_IS_EDITING,
  CHANGE_EXPENSES_ORDERS,
  } from '../actions/actionTypes';

// isEditing have two properties: [0] is the toggle activation and [1] is the expense id;

const INITIAL_STATE = {
  currencies: {},
  isLoading: false,
  isEditing: [false, null],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {

  case EXPENSE_ACTION:
    return {
      ...state,
      expenses: [...state.expenses,
        {
          ...action.payload,
          id: state.expenses.length,
        }],
      error: '',
    };

  case CHANGE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };

  case LOADING_TYPE:
    return {
      ...state,
      isLoading: true,
    };

  case CHANGE_EXPENSES_ORDERS:
    return {
      ...state,
      expenses: action.payload,
    }

  case SUCCESS_TYPE:
    return {
      ...state,
      currencies: action.payload,
    };

  case ERROR_TYPE:
    return {
      ...state,
      error: 'error',
    };

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };

  case TOGGLE_IS_EDITING:
    return {
      ...state,
      isEditing: action.boolEditing,
    };

  default:
    return state;
  }
};

export default wallet;
