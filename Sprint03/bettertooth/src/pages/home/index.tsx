import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import ActionCards from '../../components/actionCards';
import TaskList from '../../components/taskList';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Cabeçalho */}
        <Header />

        {/* Seção de Ações */}
        <ActionCards />

        {/* Seção de Tasks */}
        <TaskList />
      </ScrollView>
    </View>
  );
}
