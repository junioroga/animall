import HomeNavigator from '../navigators/Home';
import LoginNavigator from '../navigators/Login';

export const routesSigned = [
  {
    name: 'HomeNavigator',
    component: HomeNavigator,
    options: {
      headerShown: false,
    },
  },
];

export const routesNotSigned = [
  {
    name: 'LoginNavigator',
    component: LoginNavigator,
    options: {
      headerShown: false,
    },
  },
];
