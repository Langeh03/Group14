import React from 'react'
import { Text, View , StyleSheet, Pressable} from 'react-native'

const CustomButton = ( {onPress, text, type="Primary"}) => {
    return (
      <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      </Pressable>
    )
  }

  const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 60,
        padding: 15,
        borderRadius: 50,
        marginVertical: 5,
        alignItems: 'center',
        
    },
    container_W:{
      width: 167,
      height: 60,
      padding: 15,
      borderRadius: 50,
      backgroundColor: '#18776F',
     
    },
    container_Primary:{
        backgroundColor: '#18776F',
    },
    container_Secondary:{
        borderColor: '#18776F',
        borderWidth: 2,
    },
    container_Tertiary:{
        width: 200,
        height: 60,
        padding: 15,
        borderRadius: 50,
        marginVertical: 5,
        alignItems: 'center',
        marginLeft:-24,
        
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    text_Secondary:{
        color: '#18776F',
    },
    text_Tertiary:{
        color: '#18776F',
        fontSize: 17,
    },
  });

export default CustomButton
