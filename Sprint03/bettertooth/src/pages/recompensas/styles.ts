import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 200,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15, 
  },
  box: {
    width: 120, 
    height: 120, 
    margin: 10,
    borderRadius: 15,
  },
  blue: {
    backgroundColor: 'blue',
  },
  gray: {
    backgroundColor: '#D3D3D3', 
  },
});
