import { Dimensions, StyleSheet } from 'react-native';

export const stylesCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  boxTop: {
    height: Dimensions.get('window').height * 0.35,
    width: '100%',
    backgroundColor: '#0066FF',
    borderBottomLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width * 0.4,
    resizeMode: 'contain',
    marginTop: 40, // Espaçamento extra para centralizar melhor
  },

  boxMid: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -40, // Sobreposição para visual moderno
    borderTopLeftRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40, // Espaço extra entre logo e título
  },

  text1: {
    fontSize: 18,
    color: '#0066FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  textinput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#0066FF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textFotter: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginTop: 15,
  },

  colorFotter: {
    color: '#0066FF',
  },
});
