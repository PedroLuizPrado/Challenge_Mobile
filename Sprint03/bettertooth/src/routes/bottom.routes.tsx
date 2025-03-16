import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Task from '../pages/task';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Task} />
    </Tab.Navigator>
  );
}
