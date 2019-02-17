import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './pages/Home';
import Sign from './pages/Sign';
import List from './pages/List';
import Edit from './pages/Edit';


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Edit,
    Sign,
    App: createStackNavigator({
      List,
    })
  })
);

export default Routes;