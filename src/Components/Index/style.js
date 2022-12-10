import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -180,
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    backgroundColor: 'white',
    height: 45,
    margin: 20,
    borderWidth: 0.5,
    padding: 10,
    color: 'black',
    borderRadius: 10,
    paddingLeft: 20,
    width: '85%',
  },

  submitButton: {
    backgroundColor: '#FFE600',
    padding: 10,
    margin: 15,
    width: 125,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 0.7,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
