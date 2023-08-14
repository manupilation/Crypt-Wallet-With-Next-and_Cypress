import React from 'react';
import { screen } from '@testing-library/react';
import { response as mockData, initialStateWithExpenses, initialStateWithExpensesEditingTrue } from './__mocks__/mockData';
import {expect} from '@jest/globals';
import Wallet from '../components/Wallet';
import * as ReactRedux from 'react-redux';
import { renderWithStore } from './testConfig';

const apiResponse = Promise.resolve({
  json: () => Promise.resolve(mockData),
  ok: true,
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockedExchange = jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

const mockDispatch = jest.fn();
let dispatchSpyon;

jest.spyOn(global, 'fetch').mockImplementation(() => apiResponse);

beforeAll(() => {
  dispatchSpyon = jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => mockDispatch);
});

afterEach(() => jest.clearAllMocks());

afterAll(() => global.fetch.mockClear());

describe('Wallet Component', () => { 
  test('Tests if renders without errors', () => {
    const {container} = renderWithStore(<Wallet />, initialStateWithExpenses);

    expect(container.hasChildNodes()).toBeTruthy();
  });

  test('A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão', () => {
    renderWithStore(<Wallet />, initialStateWithExpenses);
    const thDescricao = screen.getByRole('columnheader', { name: 'Descrição' });
    const thTag = screen.getByRole('columnheader', { name: 'Tag' });
    const thMetodo = screen.getByRole('columnheader', { name: 'Método de pagamento' });
    const thValor = screen.getByRole('columnheader', { name: 'Valor' });
    const thMoeda = screen.getByRole('columnheader', { name: 'Moeda' });
    const thCambio = screen.getByRole('columnheader', { name: 'Câmbio utilizado' });
    const thValorConvertido = screen.getByRole('columnheader', { name: 'Valor convertido' });
    const thMoedaConversao = screen.getByRole('columnheader', { name: 'Moeda de conversão' });
    const thEditarExcluir = screen.getByRole('columnheader', { name: 'Editar/Excluir' });

    expect(thDescricao).toBeInTheDocument();
    expect(thTag).toBeInTheDocument();
    expect(thMetodo).toBeInTheDocument();
    expect(thValor).toBeInTheDocument();
    expect(thMoeda).toBeInTheDocument();
    expect(thCambio).toBeInTheDocument();
    expect(thValorConvertido).toBeInTheDocument();
    expect(thMoedaConversao).toBeInTheDocument();
    expect(thEditarExcluir).toBeInTheDocument();
  });

  test('Tests if global isEditing[0] == true activate EditExpenseForm component', () => {

    renderWithStore(<Wallet />, initialStateWithExpensesEditingTrue);

    const editarBtn = screen.getAllByRole('button', {
      name: /editar gasto/i
    })[0];

    expect(editarBtn).toBeInTheDocument();
  });
});
