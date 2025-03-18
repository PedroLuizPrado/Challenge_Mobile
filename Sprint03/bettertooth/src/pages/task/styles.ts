import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  // 🎯 Estilo do HEADER separado
  headerContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  // 🎯 Estilos das TASKS
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  taskDesc: {
    fontSize: 14,
    color: '#777',
    marginLeft: 10,
  },
});
