import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View >
        <TextInput
          style={styles.container}
          value={value}
          onChangeText = {setValue}
          placeholder={placeholder}
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
  paddingHorizontal: 10,
  marginVertical: 10,
},
input: {},
});

export default CustomInput
