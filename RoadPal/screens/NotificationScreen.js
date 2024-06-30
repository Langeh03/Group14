import { FlatList, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

const data = [
  {
      id: 1,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 2,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 3,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 4,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 5,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 6,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 7,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 8,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 9,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 10,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 11,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  },
  {
      id: 12,
      icon: "home",
      roadSing: "Stop Sign",
      description: "Coming up in 500m"
  }
]

const NotificationScreen = () => {
  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={{flex: 1}}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
                <View style={{height: 10, width: 10}} />
            )}
            style={{marginVertical: 15}}
            renderItem={({ item: {icon, roadSing, description} }) => {
                return (
                    <TouchableOpacity style={styles.wrappernt}>
                        <Icon style={styles.icon} name={icon} type='ionicon' color='#fff' size={18}/>
                        <View>
                            <Text style={{fontWeight: '700'}}>{roadSing}</Text>
                            <Text style={{color: 'gray'}}>{description}</Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.logo}>Upcoming Notifications</Text>
              </View>
            )}
            ListFooterComponent={() => (
              <View style={{marginBottom: 50}} ></View>
            )}
        />
      </View>
    </LinearGradient>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    home: {
      height: '100%',
      paddingHorizontal: 15,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    wrappernt: {
        width: 330,
        height: 76,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        height: 'fit'
    },
    icon: {
        marginRight: 15,
        borderRadius: 50,
        backgroundColor: '#18776F',
        paddingVertical: 10,
        height: 40,
        width: 40
    },
    logo: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 15
    }
})