import React from 'react'
import { connect } from 'react-redux'
import { selectContact as _selectContact } from '../state/actions/selectedContact'

const AddNewContact = ({ selectContact }) =>
  <a onClick={() => { selectContact(null) }}>Add New Contact</a>

export default connect(undefined, {
  selectContact: _selectContact
})(AddNewContact)
