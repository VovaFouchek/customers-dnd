import { createSlice } from '@reduxjs/toolkit';

import { fetchCustomers } from './action';

const initialState = {
  customers: [],
  columnsTitle: [],
  isLoading: false,
  error: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setColumnsTitle(state, action) {
      state.columnsTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setColumnsTitle } = customersSlice.actions;
export default customersSlice.reducer;
