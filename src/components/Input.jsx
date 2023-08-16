import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  type,
  labelText,
  placeholder,
  id,
  testID,
  onChange,
  value,
}) => {
  return (
    <label htmlFor={id}>
      {labelText}
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        testid={testID} // Changed from testID to testid to match usage
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  testID: PropTypes.string, // Changed from testID to testid to match usage
  onChange: PropTypes.func,
}.isRequired;

export default Input;
