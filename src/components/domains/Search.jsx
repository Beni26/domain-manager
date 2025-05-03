import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <Input
      addonBefore={<SearchOutlined />}
      placeholder="search"
      size="large" 
      allowClear 
    />
  );
};
export default Search;
