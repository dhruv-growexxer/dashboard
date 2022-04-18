import { v4 as uuidv4 } from "uuid";

export const addUser = ({ name, email, address }) => {
  return {
    type: "ADD_USER",
    payload: {
      id: uuidv4(),
      name,
      email,
      address,
    },
  };
};

export const deleteUser = (deleteUserState) => {
  return {
    type: "DELETE_USER",
    payload: deleteUserState,
  };
};

export const updateUser = ({ name, email, address, id }) => {
  return {
    type: "UPDATE_USER",
    payload: {
      id,
      name,
      email,
      address,
    },
  };
};
