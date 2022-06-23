import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

const MyForm = ({ visible, onCreate, onCancel, title, user }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(user);
    }
    // console.log(user, "user from index.js in MyForm");
  }, [visible]);
  return (
    <Modal
      visible={visible}
      title={title}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            // console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input the email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input the address!",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="maxLength is 40"
            maxLength={40}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyForm;
