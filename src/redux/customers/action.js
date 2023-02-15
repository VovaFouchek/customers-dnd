import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

import { CUSTOMERS_FETCH } from 'redux/action-types';
import { API } from 'shared/api/config/axios';

export const fetchCustomers = createAsyncThunk(CUSTOMERS_FETCH, async () => {
  try {
    const { data } = await axios.get(API.CUSTOMERS);
    return data;
  } catch (error) {
    throw isRejectedWithValue(error.message);
  }
});
