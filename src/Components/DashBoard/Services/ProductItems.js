import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Image, Text, View, Button} from 'react-native';
import styles from './styles';
const ProductItems = ({name, price, disc, image, navigation, holder, id}) => {
  const [qty, setQty] = useState(0);
  useEffect(() => {
    holder(qty * price);
  }, [qty]);
  return (
    <View>
      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => {
          navigation.navigate('ItemDetails', {
            Name: name,
            Price: price,
            Disc: disc,
            Img: image,
          });
        }}>
        <Image source={image} style={styles.img} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}$</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.btnCo}>
        <Button
          title="add"
          onPress={() => {
            setQty(qty + 1);
          }}
        />
        <Text style={styles.qty}>{qty}</Text>
        <Button
          title="Remove"
          onPress={() => {
            if (qty > 0) {
              setQty(qty - 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default ProductItems;
