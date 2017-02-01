import React from 'react'
import { connect } from 'react-redux'
import { compose, map, toPairs } from 'ramda'
import Contact from './Contact'
import { selectContact as _selectContact } from '../state/actions/selectedContact'

const ContactsList = ({ contacts, selectContact }) => {
  return <div>
    {
      compose(
        map(([id, c]) => {
          return <Contact key={id} contact={{id, ...c}} onSelect={selectContact} />
        }),
        toPairs
      )(contacts)
    }
  </div>
}

export default connect(state => ({
  contacts: state.contacts
}), {
  selectContact: _selectContact
})(ContactsList)
