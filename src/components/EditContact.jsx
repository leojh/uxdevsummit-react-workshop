import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact as _addContact, updateContact as _updateContact, deleteContact as _deleteContact } from '../state/actions/contacts'
import { selectContact as _selectContact } from '../state/actions/selectedContact'
import shortid from 'shortid'
import { getSelectedContactObject } from '../state/selectors/selectedContact'

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.changeName = this.changeName.bind(this)
    this.addOrUpdate = this.addOrUpdate.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { selectedContactObject } = nextProps
    this.setState({ name: selectedContactObject.name || '' })
  }

  changeName(e) {
    this.setState({ name: e.target.value })
  }

  addOrUpdate(e) {
    e.preventDefault()

    const { selectedContact, selectContact } = this.props
    if (!selectedContact) {
      const newId = this.addContact()
      selectContact(newId)
    } else {
      this.updateContact()
    }
  }

  addContact() {
    const { name } = this.state
    const { addContact } = this.props
    const id = shortid.generate()
    addContact({[id]: { name }})
    return id
  }

  updateContact() {
    const { name } = this.state
    const { updateContact, selectedContactObject, selectedContact } = this.props
    const updatedContact = { ...selectedContactObject, id: selectedContact, name }
    updateContact(updatedContact)
  }

  deleteContact(e) {
    e.preventDefault()

    const { deleteContact } = this.props
    const { selectedContact, selectContact } = this.props
    deleteContact(selectedContact)
    selectContact(null)
  }

  render() {
    const { name } = this.state
    const { selectedContactObject } = this.props

    return selectedContactObject && <div>
      <form>
        <h3>{name}</h3>
        <div>
          <div>
            <input value={name} placeholder="Name" onChange={this.changeName} />
          </div>
          <div>
            <button type="submit" onClick={this.addOrUpdate}>Save</button>
            <button onClick={this.deleteContact}>Delete</button>
          </div>
        </div>
      </form>
    </div>
  }
}

export default connect(state => ({
  selectedContactObject: getSelectedContactObject(state),
  selectedContact: state.selectedContact
}), {
  selectContact: _selectContact,
  addContact: _addContact,
  updateContact: _updateContact,
  deleteContact: _deleteContact
})(EditContact)
