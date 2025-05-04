import { configureStore } from '@reduxjs/toolkit';
import domainReducer from '../feathers/domainSlice'; 

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});
