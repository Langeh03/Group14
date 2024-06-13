import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import NavFavourites from '../components/NavFavourites'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "1",
    title: "Travel",
    image: "",
    screen: "Map",
  },
  {
    id: "2",
    title: "Road Signs",
    image: "",
    screen: "Map",
  },
  {
    id: "3",
    title: "Reports",
    image: "",
    screen: "Map",
  },
  {
    id: "4",
    title: "Help",
    image: "",
    screen: "Map",
  }
]

const HomeScreen = () => {

  const  navigation = useNavigation();

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={{flex: 1, paddingnavigationBottom: 20}}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{gap: 10}}
            contentContainerStyle={{gap: 10}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
                <View style={{height: 10, width: 10}} />
            )}
            style={{}}
            renderItem={({ item }) => {
                return (
                  <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    style={styles.container}>
                    <Text style={styles.heading}>{item.title}</Text>
                    <View style={{flex: 1,}}>
                        <Image 
                            style={{width: 100, height: 100, resizeMode: 'contain', marginTop: -30, marginLeft: -20}}
                            source={require('../assets/car.webp')} 
                        />
                    </View>
                  </TouchableOpacity>
                );
            }}
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.logo}>RoadPal</Text>
        
                <Image 
                  style={{width: 326, height: 166, resizeMode: 'cover', borderRadius: 20, marginVertical: 15}}
                  source={require('../assets/car.jpg')} 
                />
              </View>
            )}
            ListFooterComponent={() => (
                <View>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>Saved Route</Text>
                  <NavFavourites />
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Icon style={styles.icon} name='star' type='ionicon' color='#fff' size={18}/>
                    <View style={{marginBottom: 50}} >
                        <Text style={{paddingVertical: 10, fontWeight: '700'}}>View Saved Destinations</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            )}
        />
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingTop: 30,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: '#18776F',
    paddingVertical: 10,
    height: 40,
    width: 40
  },
  container: {
    padding: 10,
    paddingRight: 0,
    width: 160,
    height: 100,
    backgroundColor: '#27A28E',
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  }
})
