import { Drawer, Form, Input, Switch, Select, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import useAddDoamin from "./useAddDoamin";
import useEditDomain from "./useEditDomain";

const { Option } = Select;

const DrawerForm = ({ open, onClose, selectedDomain }) => {
  const [form] = Form.useForm();
  const { mutateAddDomain } = useAddDoamin();
  const { isEditing, mutateeditDomain } = useEditDomain();

  const isEditMode = Boolean(selectedDomain?.id);

  useEffect(() => {
    if (selectedDomain) {
      form.setFieldsValue({
        domain: selectedDomain.domain,
        isActive: selectedDomain.isActive,
        status: selectedDomain.status,
      });
    } else {
      form.resetFields(); // وقتی قراره فرم Add باشه، فرم پاک میشه
    }
  }, [selectedDomain, form]);

  const onFinish = (values) => {
    if (isEditMode) {
      // فقط فیلدهای مورد نیاز برای Edit رو بفرست
      mutateeditDomain({
        data: {
          domain: values.domain,
          isActive: values.isActive,
        },
        id: selectedDomain.id,
      });
    } else {
      mutateAddDomain(values);
    }
  };

  return (
    <Drawer
      title={isEditMode ? "Edit Domain" : "Add Domain"}
      onClose={onClose}
      open={open}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        {/* Domain URL */}
        <Form.Item
          label="Domain URL"
          name="domain"
          rules={[
            { required: true, message: "Please enter the domain URL" },
            {
              type: "url",
              message: "Please enter a valid URL (e.g. https://example.com)",
            },
          ]}
        >
          <Input placeholder="e.g. https://example.com" />
        </Form.Item>

        {/* Is Active */}
        <Form.Item label="Is Active" name="isActive" valuePropName="checked">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>

        {/* Verification Status فقط در حالت Add نمایش داده می‌شود */}
        {!isEditMode && (
          <Form.Item
            label="Verification Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please select verification status",
              },
            ]}
          >
            <Select placeholder="Select status">
              <Option value="pending">Pending</Option>
              <Option value="verified">Verified</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Form.Item>
        )}

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isEditing} >
            {isEditMode ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default DrawerForm;
