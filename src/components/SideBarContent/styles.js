import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#0000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '200',
  },
});
