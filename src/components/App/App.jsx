import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmithandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    contacts.find(contact => newContact.name === contact.name)
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmithandler} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          deleteOnClick={this.deleteContactHandler}
        />
      </div>
    );
  }
}

export default App;
