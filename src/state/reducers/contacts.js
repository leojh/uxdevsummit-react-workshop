import { map, filter } from 'ramda'

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return action.contacts
    case 'ADD_CONTACT':
      return {...state, ...action.contact}
    case 'UPDATE_CONTACT': {
      const existingContact = state[action.contact.id]
      return map(s => s === existingContact ? action.contact : s, state)
    }
    case 'DELETE_CONTACT': {
      const existingContact = state[action.contactId]
      return filter(s => s !== existingContact, state)
    }
    default:
      return state
  }
}

export default contacts
