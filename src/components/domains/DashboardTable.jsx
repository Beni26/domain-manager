import React from "react";
import { Table, Button } from "antd";
import { useSelector } from "react-redux";
import { formatDate } from "../../lib/formatDate";
import { CheckCircleFilled, CheckCircleTwoTone, ExclamationCircleFilled, ExclamationCircleTwoTone, LinkOutlined } from "@ant-design/icons";
import useDeleteDomain from "./useDeleteDomain";

// ستون‌ها
const columns = (handleDelete, handleEdit) => [
  {
    title: "Domain URL",
    dataIndex: "domain",
    key: "domain",
    render: (_, record) => (
      <b className="flex items-center gap-3">
        {record.isActive ? (
          <CheckCircleFilled className="!text-green-400" />
        ) : (
          <ExclamationCircleFilled className="!text-red-400" />
        )}
        {record.domain}
        <a href={record.domain} target="_blank" rel="noopener noreferrer">
          <LinkOutlined />
        </a>
      </b>
    ),
  },
  {
    title: "Active Status",
    dataIndex: "isActive",
    key: "isActive",
    render: (isActive) =>
      isActive ? (
        <span className="text-green-400 bold">Active</span>
      ) : (
        <span className="text-red-500 bold">Not Active</span>
      ),
  },

  {
    title: "Verification Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Date",
    dataIndex: "createdDate",
    key: "createdDate",
    render: (timeStamp) => formatDate(timeStamp),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div className="flex gap-2 ">
        <Button
          type="primary"
          size="small"
          onClick={() => handleEdit(record)} // اصلاح id
        >
          Edit
        </Button>
        <Button
          danger
          size="small"
          className="!bg-red-400 !text-white"
          onClick={() => handleDelete(record.id)} // اصلاح id
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const DashboardTable = ({ domainsGetting,onEdit }) => {
  const domains = useSelector((state) => state.domain.filteredDomains);
  const {mutateDeletetDomain}= useDeleteDomain();
  const handleDelete = (id) => {
    mutateDeletetDomain(id)
  };

  const handleEdit = (domain) => {
    onEdit(domain); 
  };

  return (
    <Table
      columns={columns(handleDelete, handleEdit)}
      dataSource={domains}
      rowKey="id" // اصلاح key
      pagination={true}
      bordered
      loading={domainsGetting} // اضافه کردن بارگذاری
      className="mt-20 rounded-md"
    />
  );
};

export default DashboardTable;
