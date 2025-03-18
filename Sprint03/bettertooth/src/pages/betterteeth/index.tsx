import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import Imagem from "../../assets/imagemSmile.png";

export default function Betterteeth() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos verificar a qualidade do seu sorriso</Text>
      <Image
         source={Imagem} style={styles.image} resizeMode="contain" 
        
      />
    </View>
  );
}
