import React from "react";
import { Table, Button } from "antd";
import { useSelector } from "react-redux";
import { formatDate } from "../../lib/formatDate";
import {
  CheckCircleFilled,
  CheckCircleTwoTone,
  ExclamationCircleFilled,
  ExclamationCircleTwoTone,
  LinkOutlined,
} from "@ant-design/icons";
import useDeleteDomain from "./useDeleteDomain";
import { Tag } from "antd";

// ستون‌ها
const columns = (handleDelete, handleEdit) => [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
  },
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
        <a
          href={
            record.domain.startsWith("http")
              ? record.domain
              : `http://${record.domain}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <Tag color="#87d068">Active</Tag>
      ) : (
        <Tag color="#f50">Not Active</Tag>
      ),
  },

  {
    title: "Verification Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      switch (status) {
        case "verified":
          color = "green";
          break;
        case "pending":
          color = "gold";
          break;
        case "rejected":
          color = "red";
          break;
        default:
          color = "default";
      }

      return (
        <Tag color={color} className="font-medium capitalize">
          {status}
        </Tag>
      );
    },
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
        <Button type="primary" size="small" onClick={() => handleEdit(record)}>
          Edit
        </Button>
        <Button
          danger
          size="small"
          className="!bg-red-400 !text-white"
          onClick={() => handleDelete(record.id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const DashboardTable = ({ domainsGetting, onEdit }) => {
  const domains = useSelector((state) => state.domain.filteredDomains);
  const { mutateDeletetDomain } = useDeleteDomain();

  const handleDelete = (id) => {
    mutateDeletetDomain(id);
  };

  const handleEdit = (domain) => {
    onEdit(domain);
  };

  return (
    <Table
      columns={columns(handleDelete, handleEdit)}
      dataSource={domains}
      rowKey="id"
      pagination={true}
      bordered
      loading={domainsGetting}
      className="mt-20 rounded-md"
    />
  );
};

export default DashboardTable;
