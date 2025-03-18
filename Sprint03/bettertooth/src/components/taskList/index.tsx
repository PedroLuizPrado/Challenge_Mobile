import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function TaskList() {
  const tasks = [
    { id: '1', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
    { id: '2', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tasksHeader}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Veja todas</Text>
        </TouchableOpacity>
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
        nestedScrollEnabled={true} 
        contentContainerStyle={{ flexGrow: 1 }} 
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}
