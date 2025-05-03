import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domains: [],
  filteredDomains: [],
  filterStatus: "all", // all | pending | verified | rejected
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setDomains: (state, action) => {
      state.domains = action.payload;
      state.filteredDomains = filterByStatus(action.payload, state.filterStatus);
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
      state.filteredDomains = filterByStatus(state.domains, action.payload);
      
    },
  },
});

const filterByStatus = (domains, status) => {
  if (status === "all") return domains;
  return domains.filter((domain) => domain.status === status);
};

export const { setDomains, setFilterStatus } = domainSlice.actions;
export default domainSlice.reducer;
