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
      width: '100%',
      height: 60,
      padding: 15,
      borderRadius: 50,
      marginVertical: 5,
      alignItems: 'center',
    },
    container_W:{
      width: 237,
      height: 60,
      padding: 15,
      borderRadius: 50,
      backgroundColor: '#27A28E',
     
    },
    container_Primary:{
      backgroundColor: '#27A28E',
    },
    container_Secondary:{
      borderColor: '#27A28E',
      borderWidth: 2,
    },
    container_Tertiary:{
      width: 'fit-content',
      height: 'fit-content',
      padding: 15,
      marginVertical: 5,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18,
    },
    text_Secondary:{
      color: '#27A28E',
    },
    text_Tertiary:{
      color: '#27A28E',
      fontSize: 17,
    }
  });

export default CustomButton
