import { StyleSheet, Text, View, Animated, Image, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('screen')

const data = [
  {
    key: 1,
    title: 'RoadPal',
    description: 'The most reliable friend you can have on the road',
    image: require('../assets/Frame.png'),
    st: {width: 130, height: 130, resizeMode: 'contain'}
  },
  {
    key: 2,
    title: 'Safety First',
    description: "The part ahead isn't always clear, wouldn't you like to know what comes ahead?",
    image: require('../assets/yum.jpg'),
    st: {width: height, height: height, borderRadius: 50000, top: -height * 0.28, resizeMode: 'contain'}
  }
]

const Indicator = ({scrollX}) => {
  return <View style={{ position: 'absolute', bottom: 50, flexDirection: 'row'}}>
    {data.map((_, i) => {
      const  inputRange = [(i - 1) * width, i * width, (i + 1) * width]

      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1.4, 0.8],
        extrapolate: 'clamp'
      })

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.6, 0.9, 0.6],
        extrapolate: 'clamp'
      })
      return <Animated.View
        key={`indicator-${i}`}
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: '#27A28E',
          margin: 5,
          opacity,
          transform: [{scale}]
        }}
      />
    })}
  </View>
}

const Backdrop = () => {
  return <View
    style={[
      StyleSheet.absoluteFillObject,
      {
        backgroundColor: '#AAF0E5'
      }
    ]}
  />
}

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX, width),
      new Animated.Value(width)
    ), 1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-40deg', '0deg', '-40deg']
  })
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]
  })
  return <Animated.View 
    style={{
      width: height,
      height: height,
      backgroundColor: '#fff',
      borderRadius: 50000,
      position: 'absolute',
      top: -height * 0.55,
      transform: [{rotate},{translateX}]
    }}
  />
}

const Bottons = () => {

  const  navigation = useNavigation();

  return <View style={{position: 'absolute', bottom: 120}}>
    <CustomButton  text="Get Started" onPress={() => navigation.navigate('LogIn')} />
  </View>
}

const Welcomescreen = () => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop />
      <Square scrollX={scrollX} />
      <Animated.FlatList 
        data={data}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        pagingEnabled
        renderItem={({ item: {title, description, image, st} }) => {
          return (
            <View style={{ width, alignItems: 'center', overflow: 'hidden'}}>
              <View style={{flex: .6, justifyContent: 'center', overflow: 'hidden'}}>
                <Image 
                  style={st}
                  source={image} 
                />
              </View>
              <View style={{ flex: 0.4, paddingHorizontal: 15}}>
                <Text style={{fontSize: 40, fontWeight: '900'}}>{title}</Text>
                <Text>{description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Bottons />
      <Indicator scrollX={scrollX} />
    </SafeAreaView>
  )
}

export default Welcomescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})