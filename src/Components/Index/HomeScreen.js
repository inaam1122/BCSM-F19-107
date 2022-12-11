import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {firebaseAuth} from '../../../environment/config';
import SplashScreen from 'react-native-splash-screen';
import styles from './style';
const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <Image
          source={require('../Images/Background.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.container}>
          <View>
            <Image
              source={require('../Images/logo.png')}
              style={{
                width: 100,
                height: 100,
                marginBottom: 20,
              }}
            />
          </View>

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={'#9A9696'}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={'#9A9696'}
            secureTextEntry={true}
          />

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                if (!email) {
                  ToastAndroid.show(
                    'Please Enter your Email',
                    ToastAndroid.LONG,
                  );
                  return;
                } else if (!password) {
                  ToastAndroid.show(
                    'Please Enter your Password',
                    ToastAndroid.LONG,
                  );
                  return;
                } else {
                  firebaseAuth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => navigation.navigate('Dashboard'))
                    .catch(error => {
                      console.log(error);
                      ToastAndroid.show('Wrong Credentials', ToastAndroid.LONG);
                    });
                }
              }}>
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
