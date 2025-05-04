import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./domainSlice";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Input.Search
    placeholder="Search domains..."
    allowClear
    onChange={handleSearch}
    size="large"
    />
  );
};
export default Search;
