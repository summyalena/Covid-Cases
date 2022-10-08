import { configureStore } from '@reduxjs/toolkit';
import covidSliceReducer from './covid/covid';

const store = configureStore({
  reducer: {
    covidCases: covidSliceReducer,
  },
});

export default store;
