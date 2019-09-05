import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../res/theme';
import Utils from './Utils';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={Utils.styleMerger(styles.buttonStyle, this.props.containerStyle)}
        onPress={this.props.onPress}>
        {this.props.children ? (
          this.props.children
        ) : (
          <Text
            style={Utils.styleMerger(
              styles.buttonTitleStyle,
              this.props.myStyle,
            )}>
            {this.props.title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 200,
    minHeight: 49,
    margin: 10,
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    backgroundColor: Colors.buttonBackground,
  },
  buttonTitleStyle: {
    color: Colors.buttonTextColor,
    ...Fonts.boldFont(16),
  },
});

export default Button;
