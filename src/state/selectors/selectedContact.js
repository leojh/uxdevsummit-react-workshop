import { createSelector } from 'reselect'

const getContacts = state => state.contacts
const getSelectedContact = state => state.selectedContact

export const getSelectedContactObject = createSelector(
  [getContacts, getSelectedContact],
  (allContacts, selectedContact) => (selectedContact && allContacts[selectedContact]) || {}
)
