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
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_Primary:{
        backgroundColor: 'blue',
    },
    container_Tertiary:{

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_Tertiary:{
        color: 'grey',
    },
  });

export default CustomButton
