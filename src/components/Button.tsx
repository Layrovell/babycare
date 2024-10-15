// src/components/CustomButton.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress, color = '#000'}: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

export default Button;
