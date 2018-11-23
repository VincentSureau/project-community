/**
 * NPM import
 */
import React from 'react';

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
    console.log(e.target.name, ' --- ', e.target.value);
    const { setFilterWithType } = this.props;
    setFilterWithType(e.target.name, e.target.value);
  }

  render() {
    const { type, placeholder } = this.props;
    return (
      <div id="textinput" className="col">
        <input id="textinput-input" placeholder={placeholder} type="text" name={type} className="text-white w-100" onChange={e => this.onChangeInput(e)} />
      </div>
    );
  }
}

/**
 * Export
 */
export default TextInput;
