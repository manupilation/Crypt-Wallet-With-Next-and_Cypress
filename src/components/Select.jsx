import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, labelText, id, options, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          name={ name }
          id={ id }
          onChange={ onChange }
        >
          {
            options.map((op, i) => (
              <option
                key={ i }
                value={ op }
              >
                {op}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default Select;
