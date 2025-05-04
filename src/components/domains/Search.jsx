import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../feathers/domainSlice";

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
