import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/navigationTypes'; 

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function ActionCards() {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Aqui estão algumas coisas que você pode fazer</Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionCardGray}>
          <FontAwesome name="credit-card" size={24} color="#4A4A4A" />
          <Text style={styles.actionTitle}>Cartão</Text>
          <Text style={styles.actionDesc}>Faça pagamentos por aqui</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionCardBlue} 
          onPress={() => handleNavigation('Recompensas')}
        >
          <FontAwesome name="gift" size={24} color="#4A4A4A" />
          <Text style={styles.actionTitle}>Recompensas</Text>
          <Text style={styles.actionDesc}>Obtenha suas recompensas!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.actionCardBlue} 
          onPress={() => handleNavigation('Tasks')}
        >
          <Octicons name="checklist" size={24} color="#4A4A4A" />
          <Text style={styles.actionTitle}>Tasks Diárias</Text>
          <Text style={styles.actionDesc}>Complete suas metas diárias de limpeza</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionCardGray} 
          onPress={() => handleNavigation('Betterteeth')}
        >
          <MaterialIcons name="smart-toy" size={24} color="#4A4A4A" />
          <Text style={styles.actionTitle}>Sistema de IA</Text>
          <Text style={styles.actionDesc}>Faça a análise de seus dentes com a nossa IA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}