import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './configureStore'; 

import AuthScreen from './src/Login/screens/Auth/Auth';
import RegisterScreen from './src/Login/screens/Register/Register';

import AllPostsScreen from './src/AllPosts/screens/AllPostsScreen';
import OwnPostsScreen from './src/OwnPosts/screens/OwnPostsScreen';
import UsersScreen from './src/Users/screens/UsersScreen';


const store = configureStore(); 
Navigation.registerComponent('demo.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('demo.RegisterScreen', () => RegisterScreen, store, Provider);

Navigation.registerComponent('demo.AllPostsScreen', () => AllPostsScreen, store, Provider);
Navigation.registerComponent('demo.OwnPostsScreen', () => OwnPostsScreen, store, Provider);
Navigation.registerComponent('demo.UsersScreen', () => UsersScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen : {
    screen: 'demo.AuthScreen',
    navigatorStyle: {
	  	navBarHidden: true
	  }
  }
});  

