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
    const { setFilterWithType } = this.props;
    setFilterWithType(e.target.name, e.target.value);
  }

  render() {
    const { type, placeholder, value } = this.props;
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div id="textinput">
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
      </div>
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setFilterWithType: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
};

/**
 * Export
 */
export default TextInput;
