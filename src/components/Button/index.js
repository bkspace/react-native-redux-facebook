import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

class Button extends Component {
  render() {
    let buttonStyle;
    let buttonTextStyle;

    if (this.props.styles) {
      buttonStyle = this.props.styles.button;
      buttonTextStyle = this.props.styles.buttonText;
    }

    return (
      <TouchableHighlight
        style={[styles.button, buttonStyle]}
        onPress={this.props.onButtonPressed}
      >
        <Text
          style={[styles.buttonText, buttonTextStyle]}
        >
        {this.props.buttonText}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  styles: PropTypes.object,
  onButtonPressed: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};


export default Button;
