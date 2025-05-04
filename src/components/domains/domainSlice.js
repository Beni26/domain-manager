import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domains: [],
  filteredDomains: [],
  filterStatus: "all", // all | pending | verified | rejected
  searchTerm: "",     
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setDomains: (state, action) => {
      state.domains = action.payload;
      state.filteredDomains = filterDomains(action.payload, state.filterStatus, state.searchTerm);
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
      state.filteredDomains = filterDomains(state.domains, action.payload, state.searchTerm);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredDomains = filterDomains(state.domains, state.filterStatus, action.payload);
    },
  },
});

const filterDomains = (domains, status, searchTerm) => {
  let result = domains;
  if (status !== "all") {
    result = result.filter((domain) => domain.status === status);
  }
  if (searchTerm) {
    result = result.filter((domain) =>
      domain.domain.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return result;
};

export const { setDomains, setFilterStatus, setSearchTerm } = domainSlice.actions;
export default domainSlice.reducer;
