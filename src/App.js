import React, { Component } from 'react';
import './App.css'

import ContactsList from './components/ContactsList'
import EditContact from './components/EditContact'
import AddNewContact from './components/AddNewContact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <div className="col-xs-12">
            <div className="col-xs-6">
              <h1>Contacts: </h1>
                <p>
                  <AddNewContact />
                </p>
              <div>
                <ContactsList />
              </div>
            </div>
            <div className="col-xs-6">
              <h1>Edit: </h1>
              <div>
                <EditContact />
              </div>
            </div>
          </div>
        </p>
      </div>
    )
  }
}

export default App
