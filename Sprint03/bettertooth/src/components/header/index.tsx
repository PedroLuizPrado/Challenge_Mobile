import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function Header() {
  const [nome, setNome] = useState<string>(''); // estado para nome do usuário

  useEffect(() => {
    const carregarNome = async () => {
      const nomeSalvo = await AsyncStorage.getItem('@usuario_nome');
      if (nomeSalvo) setNome(nomeSalvo);
    };
    carregarNome();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Olá, {nome || 'Usuário'}!</Text>
      <MaterialIcons name="notifications-none" size={24} color="#4A4A4A" />
    </View>
  );
}
