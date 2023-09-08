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
  autoComplete
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
        autoComplete={autoComplete ? 'on' : 'off'}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  testID: PropTypes.string, // Changed from testID to testid to match usage
  autoComplete: PropTypes.bool,
};

export default Input;
