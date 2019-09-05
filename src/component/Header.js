import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

import {Fonts, Colors} from '../res/theme';
import Utils from './Utils';

export default class Header extends Component {
  renderLeftButton() {
    return (
      this.props.leftButton && (
        <TouchableOpacity onPress={this.props.onLeftPress}>
          {Utils.isComponent(this.props.leftButton) ? (
            this.props.leftButton
          ) : (
            <Text style={styles.leftTextStyle}>{this.props.leftButton}</Text>
          )}
        </TouchableOpacity>
      )
    );
  }

  renderTitle() {
    return (
      this.props.title &&
      (Utils.isComponent(this.props.title) ? (
        this.props.title
      ) : (
        <Text
          style={Utils.styleMerger(
            styles.headerTextStyle,
            this.props.textStyle,
          )}>
          {this.props.title}
        </Text>
      ))
    );
  }

  renderRightButton() {
    return (
      this.props.rightButton && (
        <TouchableOpacity onPress={this.props.onRightPress}>
          {Utils.isComponent(this.props.rightButton) ? (
            this.props.rightButton
          ) : (
            <Text style={styles.leftTextStyle}>{this.props.rightButton}</Text>
          )}
        </TouchableOpacity>
      )
    );
  }

  render() {
    return (
      <View style={styles.headerStyle}>
        <View style={{flex: 0.25}}>{this.renderLeftButton()}</View>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          {this.renderTitle()}
        </View>
        <View style={{flex: 0.25, alignItems: 'flex-end'}}>
          {this.renderRightButton()}
        </View>
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.headerBackground,
    height: Utils.isIphoneX() ? 88 : 64,
    paddingTop: Platform.OS == 'android' ? 0 : Utils.isIphoneX() ? 44 : 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerTextStyle: {
    color: Colors.headerTextColor,
    ...Fonts.boldFont(16),
  },
  leftStyle: {},
  leftTextStyle: {
    color: Colors.headerTextColor,
  },
};
