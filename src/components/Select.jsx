import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, labelText, id, options, onChange, selected = "" }) => {
  return (
    <label htmlFor={id}>
      {labelText}
      <select
        name={name}
        id={id}
        onChange={onChange}
      >
        {
          options && options.map((op, i) => (
            <option
              key={i}
              value={op}
              selected={op === selected}
            >
              {op}
            </option>
          ))
        }
      </select>
    </label>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default Select;
