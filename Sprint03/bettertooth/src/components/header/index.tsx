import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Gabi!</Text>
        <MaterialIcons name="notifications-none" size={24} color="#4A4A4A" />
      </View>
    );
  }
  