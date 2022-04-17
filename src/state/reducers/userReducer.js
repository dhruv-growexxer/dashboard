const initialState = [
  {
    id: '1',
    name: 'Omen',
    email: 'omen@patel.com',
    address: 'Omen Address',
  },
  {
    id: '2',
    name: 'Sage',
    email: 'sage@chauhan.com',
    address: 'Sage Address',
  },
  {
    id: '3',
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
    default:
      return state
  }
}

export default userListReducer
