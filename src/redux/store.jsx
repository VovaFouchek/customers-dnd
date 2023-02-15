import { configureStore } from '@reduxjs/toolkit';

import customersSlice from './customers/reducer';

const store = configureStore({
  reducer: {
    customers: customersSlice,
  },
});

export default store;
