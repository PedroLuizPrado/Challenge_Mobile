import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from '../pages/home';
import Task from '../pages/task';
import Recompensas from '../pages/recompensas';
import Betterteeth from '../pages/betterteeth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para as telas que pertencem à Home
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recompensas" component={Recompensas} />
      <Stack.Screen name="Betterteeth" component={Betterteeth} />
    </Stack.Navigator>
  );
}

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'HomeStack' ? 'home' :
            route.name === 'Tasks' ? 'check-circle' :
            'help-outline';

          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: "Home" }} />
      <Tab.Screen name="Tasks" component={Task} />
    </Tab.Navigator>
  );
}
