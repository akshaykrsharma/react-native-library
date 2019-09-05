import {Dimensions, Platform} from 'react-native';
import Strings from '../res/theme/Strings';
const {height} = Dimensions.get('window');

export default class Utils {
  static styleMerger(...styles) {
    return Object.assign({}, ...styles);
  }

  static isIphoneX() {
    return Platform.OS === 'ios' && (height == 812 || height == 896);
  }

  static getStatusBarHeight() {
    return Platform.OS === 'ios' ? (Utils.isIphoneX() ? 44 : 20) : 0;
  }

  static isComponent(comp) {
    return typeof comp == 'object';
  }

  static updateConfig = config => {
    Object.keys(config).forEach(i => (Strings[i] = config[i]));
  };
}
