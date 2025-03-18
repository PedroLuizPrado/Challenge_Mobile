import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginTop: 20,
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
});
