import React from 'react';
import {Text, ToastAndroid, TouchableOpacity} from 'react-native';
import styles from './style';
const RightButton = () => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() =>
        ToastAndroid.show('Select an Item to add to Card', ToastAndroid.SHORT)
      }>
      <Text style={styles.btnText}>Checkout</Text>
    </TouchableOpacity>
  );
};

export default RightButton;
