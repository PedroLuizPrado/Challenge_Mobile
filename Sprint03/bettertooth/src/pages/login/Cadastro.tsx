import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stylesCadastro as styles } from './stylesCadastro';
import LogoBranca from '../../assets/logobranca.png'; // ✅ Logo

export default function Cadastro() {
  const navigation = useNavigation<any>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      console.log('Tentando cadastrar com:', email, senha);

      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        nome,
        email,
      });

      await AsyncStorage.setItem('@usuario_nome', nome);

      Alert.alert('Conta criada com sucesso!');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Erro ao criar conta:', error);
      Alert.alert('Erro ao criar conta', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.boxTop}>
        <Image source={LogoBranca} style={styles.logo} />
      </View>

      <ScrollView contentContainerStyle={styles.boxMid}>
        <Text style={styles.text1}>Cadastre sua conta</Text>

        <TextInput
          placeholder="Primeiro Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.textinput}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.textinput}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.textinput}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          style={styles.textinput}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.textFotter}>
          Já tem uma conta?{' '}
          <Text style={styles.colorFotter} onPress={() => navigation.navigate('Login')}>
            Faça login
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
