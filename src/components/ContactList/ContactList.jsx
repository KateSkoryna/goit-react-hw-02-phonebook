import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteOnClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <button
            type="button"
            onClick={() => {
              deleteOnClick(id);
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  deleteOnClick: PropTypes.func.isRequired,
};

export default ContactList;
