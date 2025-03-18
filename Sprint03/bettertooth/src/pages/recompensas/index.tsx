import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const rewards = [
  { id: '1', color: 'blue' },
  { id: '2', color: 'blue' },
  { id: '3', color: 'gray' },
  { id: '4', color: 'gray' },
  { id: '5', color: 'blue' },
  { id: '6', color: 'gray' },
];

export default function Recompensas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retire sua recompensa aqui</Text>
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        numColumns={2} // Mantém duas colunas na vertical
        columnWrapperStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.box, item.color === 'blue' ? styles.blue : styles.gray]} 
          />
        )}
      />
    </View>
  );
}
