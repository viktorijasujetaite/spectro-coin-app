import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Note: balance was first created as a Map - to hold key-value pairs, but
// Immer is advising against setting non-serializable objects into state,
// so I took their advice

export interface WalletState {
  balance: Array<CurrencyBalanceItem>;
}

const initialState: WalletState = {
  balance: [],
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    loadBalance: (state, action: PayloadAction<CurrencyBalanceItem[]>) => {
      const newState = {...state.balance, ...action.payload};
      state.balance = Object.values<CurrencyBalanceItem>(newState);
    },
  },
});

export const {loadBalance} = walletSlice.actions;

export default walletSlice.reducer;
