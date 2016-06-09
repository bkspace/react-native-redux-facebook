import { StyleSheet, Platform } from 'react-native';

const defaultTop = Platform.OS === 'ios' || Platform.Version > 19 ? 20 : 0;

export default StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' || Platform.Version > 19 ? 64 : 44,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: defaultTop
  },
  logoutIcon: {
    fontSize: 22,
    color: '#fff',
  },
});
