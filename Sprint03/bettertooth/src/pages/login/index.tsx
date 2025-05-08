import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        await AsyncStorage.setItem("@usuario_nome", data.nome); // ✅ nome salvo local
      }

      navigation.navigate("BottomRoutes"); // ✅ redireciona para Home
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      Alert.alert("Erro", "E-mail ou senha incorretos!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text1}>Bem-vindo de volta!</Text>
      </View>

      <View style={styles.boxMid}>
        <TextInput
          style={styles.textinput}
          value={email}
          onChangeText={setEmail}
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textinput}
          value={password}
          onChangeText={setPassword}
          placeholder="Insira sua senha"
          secureTextEntry
        />
      </View>

      <View style={styles.boxBottom}>
        <Button text="Login" onPress={handleLogin} />
      </View>

      <Text style={styles.textFotter}>
       Ainda não tem uma conta?{" "}
  <Text style={styles.colorFotter} onPress={() => navigation.navigate("Cadastro")}>
    Faça cadastro
      </Text>
  </Text>
    </View>
  );
}
