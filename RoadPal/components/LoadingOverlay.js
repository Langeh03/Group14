import { View, Dimensions } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';

const {width, height} = Dimensions.get('screen')

const LoadingOverlay = () => {
  return (
    <View 
      style={{
        width: width, 
        height: height, 
        flex:1, 
        alignItems: "center", 
        justifyContent: "center", 
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100,
      }}
    >
      <MotiView 
        from={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 0,
        }}
        animate={{
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: 6,
        }}
        transition={{
          type: 'timing',
          duration: '1000',
          loop: true
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 6,
          borderColor: '#fff',
        }}
      />
    </View>
  )
}

export default LoadingOverlay