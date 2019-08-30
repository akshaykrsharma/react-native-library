/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import src from './src';
module.exports = {src};

AppRegistry.registerComponent(appName, () => App);
