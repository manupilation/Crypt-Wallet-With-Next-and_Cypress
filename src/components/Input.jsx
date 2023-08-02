import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      type,
      labelText,
      placeHolder,
      id, testid,
      onChange,
      value,
    } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { labelText }
          <input
            type={ type }
            name={ name }
            value={ value }
            id={ id }
            placeholder={ placeHolder }
            testid={ testid }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  testID: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
