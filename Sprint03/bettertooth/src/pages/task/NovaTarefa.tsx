import React, { useState } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export default function NovaTarefa() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'tasks'), { title, description });
      Alert.alert('Sucesso', 'Tarefa salva com sucesso!');
      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Erro ao salvar tarefa', error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Nova Tarefa</Text>

      <TextInput
        placeholder="Título"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 15,
          padding: 12,
          borderRadius: 8,
          fontSize: 16,
        }}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Descrição"
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
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        onPress={handleAddTask}
        style={{
          backgroundColor: '#0066FF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}