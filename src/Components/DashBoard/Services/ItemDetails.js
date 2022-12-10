import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
const ItemDetail = ({route, navigation}) => {
  const {Name, Price, Img, Disc} = route.params;
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Image source={Img} style={[styles.img, {marginTop: -180}]} />
      <View
        style={{
          padding: 20,
          paddingTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.itemName}>{Name}</Text>
        <Text style={styles.itemPrice}>{Price}$</Text>
        <Text style={styles.itemdisc}>{Disc}</Text>
      </View>
    </View>
  );
};
export default ItemDetail;
