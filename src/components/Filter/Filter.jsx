import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        title="Search field"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
