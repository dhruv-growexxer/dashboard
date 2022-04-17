import { v4 as uuidv4 } from 'uuid'

const initialState = [
  {
    id: uuidv4(),
    name: 'Omen',
    email: 'omen@patel.com',
    address: 'Omen Address',
  },
  {
    id: uuidv4(),
    name: 'Sage',
    email: 'sage@chauhan.com',
    address: 'Sage Address',
  },
  {
    id: uuidv4(),
    name: 'Reyna',
    email: 'reyna@trivedi.com',
    address: 'Reyna Address',
  },
]

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const item = action.payload
      return [...state, item]

    case 'DELETE_USER':
      // console.log(action.payload, 'actions from delete_user')
      const newState = state.filter((user) => user.id !== action.payload.id)
      // console.log(newState)
      return newState
    case 'UPDATE_USER':
      // console.log(action.payload, 'actions from delete_user')
      // const newState = state.filter((user) => user.id !== action.payload.id)
      // console.log(newState)
      return state
    default:
      return state
  }
}

export default userListReducer
