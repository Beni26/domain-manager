import { Select } from "antd";
import { useDispatch } from "react-redux";
import { setFilterStatus } from "./domainSlice";

const FilterDomain = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setFilterStatus(value));
  };

  return (
    <Select
      defaultValue="all"
      style={{ width: 350 }}
      size="large"
      onChange={handleChange}
      options={[
        { value: "all", label: "All statuses" },
        { value: "pending", label: "Pending" },
        { value: "verified", label: "Verified" },
        { value: "rejected", label: "Rejected" },
      ]}
    />
  );
};

export default FilterDomain;
