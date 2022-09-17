import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        title="Search field"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
