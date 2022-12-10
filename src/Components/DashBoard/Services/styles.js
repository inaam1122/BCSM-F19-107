import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 275,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  img: {
    height: 200,
    width: '70%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 8,
    paddingLeft: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 3,
    color: 'black',
  },
  itemName: {
    fontWeight: '900',
    fontSize: 18,
    color: 'black',
  },
  itemPrice: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '900',
    color: 'black',
  },
  itemdisc: {
    fontWeight: '500',
    marginTop: 10,
    color: 'black',
  },
  btnCo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 60,
    marginTop: 10,
    marginBottom: 0,
  },
  qty: {
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default styles;
