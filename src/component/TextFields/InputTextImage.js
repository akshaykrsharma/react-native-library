import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import Utils from '../Utils';

export default class InputTextImage extends Component {
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

  renderPasswordAccessory = () => {
    return (
      this.props.isPassword && (
        <Text color={'red'} onPress={this.onAccessoryPress}>
          {this.state.secureTextEntry ? 'Show' : 'Hide'}
        </Text>
      )
    );
  };

  render() {
    const {
      labelTextStyle,
      containerStyle,
      titleTextStyle,
      inputContainerStyle,
    } = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelTextStyle}>{this.props.label}</Text>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          {this.props.image && (
            <Image
              source={this.props.image.source}
              style={this.props.image.style}
            />
          )}
          {this.props.image && (
            <View
              style={{
                height: '50%',
                margin: 5,
                width: 1,
                backgroundColor: '#d0d0d0',
              }}
            />
          )}
          <TextInput
            {...this.props}
            placeholderTextColor={labelTextStyle}
            onChangeText={this.props.onChangeText}
            secureTextEntry={
              this.props.isPassword && this.state.secureTextEntry
            }
            style={Utils.styleMerger(
              inputContainerStyle,
              this.props.inputContainerStyle,
            )}
          />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              right: 0,
              marginBottom: 3,
            }}>
            {this.renderPasswordAccessory()}
          </View>
        </View>
        <View style={{height: 1, width: '100%', backgroundColor: '#d0d0d0'}} />
        <Text style={titleTextStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 30,
    marginVertical: 0,
  },
  inputContainerStyle: {
    width: '100%',
  },
  labelTextStyle: {},
  titleTextStyle: {},
  affixTextStyle: {},
});
