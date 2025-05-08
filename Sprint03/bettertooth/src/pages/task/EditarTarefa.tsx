import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../../../firebase';
import { doc, getDoc, updateDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarTarefa() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { taskId } = route.params as { taskId: string };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const atualizarCache = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const list = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    await AsyncStorage.setItem('@tarefas', JSON.stringify(list));
  };

  const loadTask = async () => {
    try {
      const docRef = doc(db, 'tasks', taskId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setDescription(data.description);
      } else {
        Alert.alert('Erro', 'Tarefa não encontrada');
        navigation.goBack();
      }
    } catch (err) {
      Alert.alert('Erro ao carregar tarefa');
    }
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'tasks', taskId), { title, description });
      await atualizarCache(); // ✅ atualiza cache
      Alert.alert('Sucesso', 'Tarefa atualizada!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro ao atualizar tarefa');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'tasks', taskId));
      await atualizarCache(); // ✅ atualiza cache
      Alert.alert('Tarefa deletada com sucesso!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro ao deletar tarefa');
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Editar Tarefa</Text>

      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 15,
          padding: 12,
          borderRadius: 8,
          fontSize: 16,
        }}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 20,
          padding: 12,
          borderRadius: 8,
          fontSize: 16,
          height: 100,
          textAlignVertical: 'top',
        }}
      />

      <TouchableOpacity
        onPress={handleUpdate}
        style={{
          backgroundColor: '#0066FF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Salvar Mudanças</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDelete}
        style={{
          backgroundColor: '#FF3B30',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Deletar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}
