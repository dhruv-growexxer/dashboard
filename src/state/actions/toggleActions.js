export const toggleSide = (toggleState) => {
  return {
    type: 'TOGGLE_SIDE',
    payload: !toggleState,
  }
}
