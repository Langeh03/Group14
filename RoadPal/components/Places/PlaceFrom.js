import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'

const PlaceFrom = () => {
    const [title, setTitle] = useState('');

  return (
    <View style={{flex: 1, marginTop: 40}}>
      <Text style={styles.input_text}>Title</Text>
      <CustomInput placeholder="title" value={title} setValue={setTitle.bind(this, 'email')} />
    </View>
  )
}

export default PlaceFrom

const styles = StyleSheet.create({
    input_text:{
      fontSize: 16,
      fontWeight: 'black',
    },
})