import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import ProductItems from './ProductItems';
import Products from './Products';
import styles from './styles';
const ProductsServices = props => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [holder, setHodler] = useState([]);

  return (
    <>
      <Text style={[styles.price, {marginLeft: 60, paddingTop: 10}]}>
        Total Price: {holder}
      </Text>
      <ScrollView style={{marginBottom: 20, marginTop: 20}}>
        {Products.map((item, i) => {
          return (
            <ProductItems
              key={i}
              {...item}
              navigation={props.navigation}
              holder={val => setHodler(val)}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default ProductsServices;
