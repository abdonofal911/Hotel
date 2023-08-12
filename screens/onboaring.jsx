import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import fonts from '../assets/fonts';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/Vector1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.HeaderText}>Travel with no worry</Text>
        <Text style={styles.text}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  textWrapper: {
    position: 'absolute',
    top: 530,
    left: 25,
    width: 385,
    height: 80,
  },
  container: {flex: 1, flexDirection: 'column'},
  image: {
    width: 360,
    height: 450,
    position: 'absolute',
    top: 1,
  },
  HeaderText: {
    fontFamily: fonts.black,
    fontSize: 24,
    margin: 5,
  },
  text: {
    margin: 15,
    fontFamily: fonts.regular,
    fontSize: 15,
    color: '#3e3e3e',
  },
  button: {
    width: 165,
    height: 57,
    borderRadius: 25,
    backgroundColor: '#00A76E',
    position: 'absolute',
    top: 710,
    left: 118,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    margin: 15,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: fonts.regular,
  },
});
