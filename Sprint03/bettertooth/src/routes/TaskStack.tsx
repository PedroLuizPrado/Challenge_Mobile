import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from '../pages/task';
import NovaTarefa from '../pages/task/NovaTarefa';


const Stack = createNativeStackNavigator();

export default function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} options={{ headerShown: false }} />
      <Stack.Screen
        name="NovaTarefa"
        component={NovaTarefa}
        options={{
          presentation: 'modal',
          title: 'Nova Tarefa',
        }}
      />
    </Stack.Navigator>
  );
}
