import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import fonts from '../../assets/fonts';
const MyTextInput = ({Header, InputType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>{Header}</Text>
      <View style={styles.inputFieldWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder={`Enter Your ${InputType} Here`}
        />
      </View>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 325,
    height: 100,
    top: 230,
    left: 25,
  },
  Header: {
    fontFamily: fonts.bold,
    fontSize: 16,
    lineHeight: 22,
    width: 160,
    height: 25,
  },
  inputField: {
    width: 350,
    height: 55,
    marginLeft: 15,
  },
  inputFieldWrapper: {
    position: 'absolute',
    borderRadius: 28,
    backgroundColor: 'white',
    width: 350,
    height: 55,
    top: 42,
    marginLeft: 4,
  },
});
