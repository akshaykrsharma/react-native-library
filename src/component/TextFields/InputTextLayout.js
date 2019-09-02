import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Utils from '../Utils';

export default class InputTextLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }

  onAccessoryPress = () => {
    this.props.isPassword &&
      this.setState(({secureTextEntry}) => ({
        secureTextEntry: !secureTextEntry,
      }));
  };

  // renderPasswordAccessory = () => {
  //   return (
  //     this.props.isPassword && (
  //       <Text
  //         color={TextField.defaultProps.baseColor}
  //         onPress={this.onAccessoryPress}>
  //         {this.state.secureTextEntry ? 'Show' : 'Hide'}
  //       </Text>
  //     )
  //   );
  // };

  renderPasswordAccessory = () => {
    let name = !this.state.secureTextEntry ? 'visibility' : 'visibility-off';

    return (
      this.props.isPassword && (
        <MaterialIcon
          size={24}
          name={name}
          color={TextField.defaultProps.baseColor}
          onPress={this.onAccessoryPress}
          suppressHighlighting
        />
      )
    );
  };

  render() {
    return (
      <TextField
        //labelHeight={50}
        tintColor={
          !!this.props.tintColor ? this.props.tintColor : 'rgba(0, 0, 0, 1)'
        } //seperator color and Upper Label color
        containerStyle={Utils.styleMerger(
          styles.containerStyle,
          this.props.containerStyle,
        )}
        affixTextStyle={styles.affixTextStyle}
        multiline={false}
        label={this.props.placeholder}
        labelTextStyle={styles.labelTextStyle}
        baseColor={!!this.props.baseColor?this.props.baseColor:'rgba(0, 0, 255, 1)'} // Top Lable when is not focus and color of title
        inputContainerStyle={Utils.styleMerger(
          styles.inputContainerStyle,
          this.props.inputContainerStyle,
        )}
        secureTextEntry={this.props.isPassword && this.state.secureTextEntry}
        onTextChange={this.props.onTextChange}
        renderAccessory={this.renderPasswordAccessory}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 30,
    marginVertical: 0,
  },
  inputContainerStyle: {},
  labelTextStyle: {},
  titleTextStyle: {},
  affixTextStyle: {},
});
