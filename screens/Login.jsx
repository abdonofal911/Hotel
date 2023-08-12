import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MyTextInput from '../components/Login&SignUp/TextInput';
import fonts from '../assets/fonts';

const Login = ({navigation}) => {
  return (
    <View>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../assets/images/hopinLogo.png')}
        />
      </View>
      <View style={styles.ButtonsWrapper}>
        <TouchableOpacity>
          <View style={styles.Login}>
            <Text
              style={{
                fontFamily: fonts.SemiBold,
                fontSize: 20,
                color: 'black',
              }}>
              Log in
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.Signup}>
            <Text style={{fontFamily: fonts.medium, fontSize: 20}}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <MyTextInput
          Header={'Username or E-mail'}
          InputType={'Username or E-mail here'}
        />
      </View>
      <View style={{top: 150}}>
        <MyTextInput Header={'Password'} InputType={'Password'} />
      </View>
      <TouchableOpacity style={styles.forgotButton}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.LoginButton}>
        <Text
          style={{fontFamily: fonts.SemiBold, fontSize: 18, color: 'white'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoWrapper: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 65,
    left: Dimensions.get('screen').width / 2.32,
  },
  logo: {alignSelf: 'center'},
  ButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 66,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    top: Dimensions.get('screen').height / 4.9,
  },
  Login: {
    width: Dimensions.get('screen').width / 2,
    height: 66,
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#00A76E',
  },
  Signup: {
    width: Dimensions.get('screen').width / 2,
    height: 66,
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotButton: {
    position: 'absolute',
    width: 130,
    height: 25,
    top: 580,
    left: 260,
  },
  LoginButton: {
    width: 325,
    height: 60,
    alignSelf: 'center',
    top: 600,
    borderRadius: 30,
    backgroundColor: '#00A76E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
