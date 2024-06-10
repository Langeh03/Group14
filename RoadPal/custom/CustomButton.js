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
        width: 237,
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
      backgroundColor: '#35989D',
     
    },
    container_Primary:{
        backgroundColor: '#35989D',
    },
    container_Secondary:{
        borderColor: 'blue',
        // borderWidth: 2,
    },
    container_Tertiary:{

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_Secondary:{
        color: 'blue',
    },
    text_Tertiary:{
        color: '#35989D',
    },
  });

export default CustomButton
