import { Button } from "antd";
import React, { useEffect, useState } from "react";
import MyForm from "../../components/Form";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../state/actions/userActions";
import { bindActionCreators } from "redux";

const UpdateUser = ({ user }) => {
  const users = useSelector((state) => state.users);
  //   useEffect(() => {
  //     console.log("userupdate user", user);
  //   }, [user]);
  const dispatch = useDispatch();

  const updateUserComponent = bindActionCreators(updateUser, dispatch);

  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    values.id = user.id;
    // console.log(user.id + "uesr id from updateUser in onCreate");
    updateUserComponent(values);
    // console.log("Received values of form: ", values);

    setVisible(false);
  };
  return (
    <>
      {visible && <h1>{user.id}</h1>}
      <EditOutlined
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Update User
      </EditOutlined>
      <MyForm
        user={user}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        title="Edit User"
      />
    </>
  );
};

export default UpdateUser;
