import { Button } from "antd";
import React, { useState } from "react";
import MyForm from "../../components/Form";

import { useDispatch } from "react-redux";
import { addUser } from "../../state/actions/userActions";
import { bindActionCreators } from "redux";

const AddUser = () => {
  const dispatch = useDispatch();

  const addUserComponent = bindActionCreators(addUser, dispatch);

  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    addUserComponent(values);
    setVisible(false);
  };
  return (
    <div>
      <Button
        className="btn-adduser"
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add User
      </Button>
      <MyForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        title="Add a new user"
      />
    </div>
  );
};

export default AddUser;
