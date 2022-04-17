import { v4 as uuidv4 } from 'uuid'

export const addUser = ({ name, email, address }) => {
  return {
    type: 'ADD_USER',
    payload: {
      id: uuidv4(),
      name,
      email,
      address,
    },
  }
}

export const deleteUser = (deleteUser) => {
  return {
    type: 'DELETE_USER',
    payload: deleteUser,
  }
}

export const updateUser = (toggleState) => {
  return {
    type: 'UPDATE_USER',
    payload: toggleState,
  }
}
