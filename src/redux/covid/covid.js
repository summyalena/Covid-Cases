import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://coronavirus.m.pipedream.net/';

export const fetchCovidCases = createAsyncThunk('fetch-data', async () => {
  const response = await axios.get(api);
  const data = await response.data;
  const { rawData } = data;
  const result = rawData.slice(0, 10);
  console.log(result);
  return result;
});

const initialState = {
  covidCases: [],
  country: [],
  loading: false,
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    filterCases(state, action) {
      console.log(state.covidCases);
      // eslint-disable-next-line no-param-reassign, max-len
      state.country = state.covidCases.filter((covid) => covid.Country_Region === action.payload);
      console.log(action.payload);
      console.log(state.covidCases);
      console.log(action);
    },
  },
  extraReducers: {
    [fetchCovidCases.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [fetchCovidCases.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.covidCases = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    },
  },
});

export const { actions } = covidSlice;

export default covidSlice.reducer;
