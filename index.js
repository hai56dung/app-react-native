/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/screens/SplashScreen';

import {name as appName} from './app.json';
import Wellcome from './src/screens/WellCome';
import Authorization from './src/screens/Authorization';
import Registration from './src/screens/Registration';
import ForgotPassword from './src/screens/ForgotPassword';

AppRegistry.registerComponent(appName, () => App);
