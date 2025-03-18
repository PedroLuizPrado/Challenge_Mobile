import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Octicons } from '@expo/vector-icons';

const tasks = [
  { id: '1', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
  { id: '2', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
  { id: '3', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
  { id: '4', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
];

export default function Tasks() {
  return (
    <View style={styles.container}>
      
      {/* HEADER - Agora com estilo separado no CSS */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Tasks Diárias</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Octicons name="checklist" size={20} color="#4A4A4A" />
            <View>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDesc}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
