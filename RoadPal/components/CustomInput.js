import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText = {setValue}
          placeholder={placeholder}
          style={StyleSheet.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
container: {
  backgroundColor: 'white',
  width: '100%',
  height: 42,

  
  borderRadius: 10,

  paddingVertical: 10,
  paddingHorizontal: 10,
  marginVertical: 10,
},
input: {},
});

export default CustomInput
