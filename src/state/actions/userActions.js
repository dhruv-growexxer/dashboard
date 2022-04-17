export const addUser = ({ name, email, address }) => {
  return {
    type: 'ADD_USER',
    payload: {
      name,
      email,
      address,
    },
  }
}

export const deleteUser = (toggleState) => {
  return {
    type: 'ADD_USER',
    payload: toggleState,
  }
}

export const updateUser = (toggleState) => {
  return {
    type: 'ADD_USER',
    payload: toggleState,
  }
}
