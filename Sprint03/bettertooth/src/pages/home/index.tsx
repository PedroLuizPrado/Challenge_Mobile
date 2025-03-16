import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function Home() {
  const tasks = [
    { id: '1', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
    { id: '2', title: 'Tasks Diárias', description: 'Complete suas metas diárias de limpeza' },
  ];

  return (
    <View style={styles.container}>
      {/* View para garantir espaçamento correto */}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Pedro!</Text>
          <MaterialIcons name="notifications-none" size={24} color="#4A4A4A" />
        </View>
        <Text style={styles.subTitle}>O que você gostaria de fazer hoje?</Text>

        {/* Seção de Ações */}
        <Text style={styles.sectionTitle}>Aqui estão algumas coisas que você pode fazer</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionCardGray}>
            <FontAwesome name="file-text-o" size={24} color="#4A4A4A" />
            <Text style={styles.actionTitle}>Lorem ipsum</Text>
            <Text style={styles.actionDesc}>Et dolor amet in lorem ipsum et dolor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCardBlue}>
            <FontAwesome name="gift" size={24} color="#4A4A4A" />
            <Text style={styles.actionTitle}>Recompensas</Text>
            <Text style={styles.actionDesc}>Obtenha suas recompensas!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionCardBlue}>
            <Octicons name="checklist" size={24} color="#4A4A4A" />
            <Text style={styles.actionTitle}>Tasks Diárias</Text>
            <Text style={styles.actionDesc}>Complete suas metas diárias de limpeza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCardGray}>
            <MaterialIcons name="smart-toy" size={24} color="#4A4A4A" />
            <Text style={styles.actionTitle}>Sistema de IA</Text>
            <Text style={styles.actionDesc}>Faça a análise de seus dentes com a nossa IA</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Tasks */}
        <View style={styles.tasksHeader}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Veja todas</Text>
          </TouchableOpacity>
        </View>

        {/* FlatList fora do ScrollView para evitar erro */}
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
          showsVerticalScrollIndicator={false} // Esconde a barra de rolagem
        />
      </View>
    </View>
  );
}
