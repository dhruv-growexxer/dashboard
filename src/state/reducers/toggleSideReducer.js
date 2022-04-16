const initialState = false

const toggleSideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE':
      return !action.payload
    default:
      return state
  }
}

export default toggleSideReducer
