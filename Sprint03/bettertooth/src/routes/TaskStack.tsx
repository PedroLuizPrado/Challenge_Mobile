import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from '../pages/task';
import NovaTarefa from '../pages/task/NovaTarefa';
import EditarTarefa from '../pages/task/EditarTarefa';

const Stack = createNativeStackNavigator();

export default function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} options={{ headerShown: false }} />
      <Stack.Screen name="NovaTarefa" component={NovaTarefa} options={{ presentation: 'modal', title: 'Nova Tarefa' }} />
      <Stack.Screen name="EditarTarefa" component={EditarTarefa} options={{ title: 'Editar Tarefa' }} />
    </Stack.Navigator>
  );
}
