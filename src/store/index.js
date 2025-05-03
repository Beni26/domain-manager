import { configureStore } from '@reduxjs/toolkit';
import domainReducer from '../components/domains/domainSlice'; 

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});
