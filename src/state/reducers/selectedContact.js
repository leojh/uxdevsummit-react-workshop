const selectedContact = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CONTACTS':
      return action.contact
    default:
      return state
  }
}

export default selectedContact
