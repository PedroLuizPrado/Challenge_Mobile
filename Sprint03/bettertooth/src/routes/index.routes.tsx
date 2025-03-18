import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes'; 
// Tipagem de navegação

import Login from '../pages/login';
import BottomRoutes from './bottom.routes';
import Recompensas from '../pages/recompensas';
import Betterteeth from '../pages/betterteeth';
import Task from '../pages/task';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" }
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name="Recompensas" component={Recompensas} />
      <Stack.Screen name="Betterteeth" component={Betterteeth} />
      <Stack.Screen name="Tasks" component={Task} />
    </Stack.Navigator>
  );
}
