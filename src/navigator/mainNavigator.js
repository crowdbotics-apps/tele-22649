import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile173837Navigator from '../features/UserProfile173837/navigator';
import Maps173818Navigator from '../features/Maps173818/navigator';
import Settings173796Navigator from '../features/Settings173796/navigator';
import Settings173781Navigator from '../features/Settings173781/navigator';
import NotificationList173780Navigator from '../features/NotificationList173780/navigator';
import Maps173779Navigator from '../features/Maps173779/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile173837: { screen: UserProfile173837Navigator },
Maps173818: { screen: Maps173818Navigator },
Settings173796: { screen: Settings173796Navigator },
Settings173781: { screen: Settings173781Navigator },
NotificationList173780: { screen: NotificationList173780Navigator },
Maps173779: { screen: Maps173779Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
