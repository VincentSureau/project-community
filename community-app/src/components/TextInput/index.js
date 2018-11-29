/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Styles
import './textinput.scss';

/**
 * Code
 */
class TextInput extends React.Component {
  onChangeInput(e) {
    // console.log(e.target.name, ' --- ', e.target.value);
    const { setFilterWithType } = this.props;
    setFilterWithType(e.target.name, e.target.value);
  }

  render() {
    const { type, placeholder, value } = this.props;
    console.log(value);
    
    return (
      <div id="textinput" className="col">
        <input
          id="textinput-input"
          placeholder={placeholder}
          type="text"
          name={type}
          className="text-white w-100"
          onChange={e => this.onChangeInput(e)}
          value={value}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setFilterWithType: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default TextInput;
