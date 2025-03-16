import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'flex-end', // 🔹 Move tudo mais para baixo
    paddingBottom: 30, // 🔹 Adiciona espaço extra no final
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20, // 🔹 Mantém o espaçamento do topo menor
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  subTitle: {
    fontSize: 16,
    color: '#8A8A8A',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginTop: 15,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  actionCardGray: {
    width: '48%',
    backgroundColor: '#F4F4F4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionCardBlue: {
    width: '48%',
    backgroundColor: '#CDE1FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginTop: 10,
  },
  actionDesc: {
    fontSize: 14,
    color: '#8A8A8A',
    textAlign: 'center',
    marginTop: 5,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  viewAll: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginTop: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginLeft: 10,
  },
  taskDesc: {
    fontSize: 14,
    color: '#8A8A8A',
    marginLeft: 10,
  },
});
