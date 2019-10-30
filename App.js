//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import { Ionicons } from 'react-native-vector-icons';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from './app/components/Dashboard';
import Home from './app/components/Home';
import Account from './app/components/Account';
import Cart from './app/components/Cart';
import Search from './app/components/Search';
import Wishlist from './app/components/Wishlist';

import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Forgot from './components/Forgot';
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    Details: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
      title: 'zagana',
      //Header title
    },
  }
);
const CartStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Cart: { screen: Cart },
    Details: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
      title: 'zagana',
      //Header title
    },
    navigationOptions : {
      activeTintColor: 'blue',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  }
);
const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Search: { screen: Search },
    Details: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
      title: 'zagana',
      //Header title
    },
  }
);
const WishStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Wishlist: { screen: Wishlist },
    Details: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
      title: 'zagana',
      //Header title
    },
  }
);
const AccountStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Account: { screen: Account },
    Details: { screen: Home },
    Profile: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
      title: 'zagana',
      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Account: { screen: AccountStack },
    Wish: { screen: WishStack },
    Search: { screen: SearchStack },
    Cart: { screen: CartStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#24b14b',
      inactiveTintColor: 'black',
    },
  }
);
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'zagana',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'zagana',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#facc09',
      },
      headerTintColor: '#000000',
    }),
  },
});
 
// const Screen3_StackNavigator = createStackNavigator({
//   //All the screen from the Screen3 will be indexed here
//   Third: {
//     screen: Forgot,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 3',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Login: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },
  Register: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },
  // Forgot: {
  //   //Title
  //   screen: Screen3_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Demo Screen 3',
  //   },
  // },
});
 
export default createAppContainer(DrawerNavigatorExample,App);