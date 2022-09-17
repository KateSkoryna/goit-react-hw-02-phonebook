import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
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

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInputHandler = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactsOnChange = () => {
    const { contacts, filter } = this.state;
    const capitalFilter = filter.toUpperCase();
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(capitalFilter)
    );
  };

  render() {
    const filteredList = this.filterContactsOnChange();

    return (
      <>
        <Global styles={GlobalStyles} />
        <section>
          <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />
            <h2>Contacts</h2>
            <Filter onChange={this.filterInputHandler} />
            <ContactList
              contacts={filteredList}
              deleteOnClick={this.deleteContact}
            />
          </Container>
        </section>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

export default App;