import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebase';
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

interface Task {
  id: string;
  title: string;
  description: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused(); // ✅ Verifica se a tela está visível

  const loadTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const list = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Task[];
    setTasks(list);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'tasks', id));
      loadTasks();
    } catch (error) {
      Alert.alert('Erro ao deletar tarefa');
    }
  };

  // ✅ Recarrega toda vez que a tela for exibida
  useEffect(() => {
    if (isFocused) {
      loadTasks();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Tasks Diárias</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskCard}
            onLongPress={() =>
              Alert.alert('Deletar', 'Deseja remover esta tarefa?', [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sim', onPress: () => handleDelete(item.id) },
              ])
            }
          >
            <Octicons name="checklist" size={20} color="#4A4A4A" />
            <View>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDesc}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* ✅ Botão Flutuante com ícone real branco */}
      <TouchableOpacity
        onPress={() => navigation.navigate('NovaTarefa')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#0066FF',
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      >
        <MaterialIcons name="add" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
