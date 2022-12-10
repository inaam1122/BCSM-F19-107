import React from 'react';
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
import styles from './style';
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

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
            onChangeText={setName}
            value={name}
            placeholder="Full Name"
            placeholderTextColor={'#9A9696'}
          />
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

          <TextInput
            style={styles.input}
            onChangeText={setDesignation}
            value={designation}
            placeholder="Designation"
            placeholderTextColor={'#9A9696'}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
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
                } else if (!name) {
                  ToastAndroid.show(
                    'Please Enter your Name',
                    ToastAndroid.LONG,
                  );
                  return;
                } else if (!designation) {
                  ToastAndroid.show(
                    'Please Enter your Designation',
                    ToastAndroid.LONG,
                  );
                  return;
                } else {
                  firebaseAuth
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => navigation.navigate('HomeScreen'))
                    .catch(error => {
                      console.log(error);
                      if (error.code === 'auth/email-already-in-use') {
                        ToastAndroid.show(
                          'Email already in use. Please register with different email',
                          ToastAndroid.LONG,
                        );
                      } else if (error.code === 'auth/invalid-email') {
                        ToastAndroid.show('Invalid Email', ToastAndroid.LONG);
                      } else {
                        ToastAndroid.show(
                          'Password should be atleast 6 digits',
                          ToastAndroid.LONG,
                        );
                      }
                    });
                }
              }}>
              <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;
