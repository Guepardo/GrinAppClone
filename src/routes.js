import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'

const AppStack = createStackNavigator({
  Home
});

export default createAppContainer(
  createDrawerNavigator({
    AppStack
  })
);