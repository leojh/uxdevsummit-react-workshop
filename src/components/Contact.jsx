import React from 'react'

const Contact = ({ contact, onSelect }) =>
  <div onClick={() => onSelect(contact.id)}>
    {contact.name}
  </div>

export default Contact
