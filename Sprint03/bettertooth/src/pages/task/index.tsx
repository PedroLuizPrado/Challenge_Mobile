import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const isFocused = useIsFocused();

  // ✅ Carrega do AsyncStorage antes de tudo
  const loadCachedTasks = async () => {
    try {
      const cached = await AsyncStorage.getItem('@tarefas');
      if (cached) {
        setTasks(JSON.parse(cached));
      }
    } catch (error) {
      console.log('Erro ao carregar cache:', error);
    }
  };

  // ✅ Carrega do Firebase e salva no AsyncStorage
  const loadTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Task[];
      setTasks(list);
      await AsyncStorage.setItem('@tarefas', JSON.stringify(list)); // ✅ salvar no cache
    } catch (error) {
      console.log('Erro ao carregar tarefas do Firebase:', error);
    }
  };

  // ✅ Deleta e sincroniza cache
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'tasks', id));
      await loadTasks(); // recarrega e atualiza cache
    } catch (error) {
      Alert.alert('Erro ao deletar tarefa');
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadCachedTasks(); // mostra rápido do cache
      loadTasks();       // sincroniza com Firebase
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
            onPress={() => navigation.navigate('EditarTarefa', { taskId: item.id })}
          >
            <Octicons name="checklist" size={20} color="#4A4A4A" />
            <View>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDesc}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

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
