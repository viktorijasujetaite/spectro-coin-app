import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

// Note: balance was first created as a Map - to hold key-value pairs, but
// Immer is advising against setting non-serializable objects into state,
// so I took their advice

export interface WalletState {
  value: number;
  balance: Array<CurrencyBalanceItem>;
}

const initialState: WalletState = {
  value: 0,
  balance: [],
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    loadBalance: (state, action: PayloadAction<CurrencyBalanceItem[]>) => {
      const newState = {...state.balance, ...action.payload};
      state.balance = Object.values<CurrencyBalanceItem>(newState);
    },
  },
});

export const {increment, loadBalance} = walletSlice.actions;

export const selectValue = (state: RootState) => state.wallet.value;

export default walletSlice.reducer;
