import { useState } from "react";
import DashboardTable from "../components/domains/DashboardTable";
import Search from "../components/domains/Search";
import useGetDomains from "../components/domains/useGetDomains";
import DrawerForm from "../components/domains/DrawerForm";
import FilterDomain from "../components/domains/FilterDomain";

function Dashboard() {
  const { domainsGetting } = useGetDomains(); // get all domains
  const [open, setOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const showDrawer = () => {
    setSelectedDomain(null); // حالت افزودن
    setOpen(true);
  };

  const handleEdit = (domain) => {
    setSelectedDomain(domain); // حالت ویرایش
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="container xl:max-w-screen-xl mx-auto mt-7 ">
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
          onClick={showDrawer}
        >
          <span>+</span> <span>Add Domain</span>
        </button>
        <div className="flex gap-4">
          <FilterDomain />
          <Search />
        </div>
      </div>
      <DashboardTable domainsGetting={domainsGetting} onEdit={handleEdit} />
      <DrawerForm open={open} onClose={onClose} selectedDomain={selectedDomain || {}} />
    </div>
  );
}

export default Dashboard;
