/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ModuleA from './ModuleA';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ModuleA);
