import { Image, StyleSheet, ScrollView, View, Platform, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Icon } from 'react-native-elements'
import { AuthContext } from '../store/auth-context'

const {width, height} = Dimensions.get('screen')

const Menu = () => {
    const authCtx = useContext(AuthContext)

    const [loaded] = useFonts({
        DancingScript: require('../assets/Fonts/DancingScript-SemiBold.ttf')
    })

    if(!loaded){
        return <AppLoading />
    }

  return (
    <ScrollView style={styles.main}>
        <View style={{flex: 1, alignItems: 'center', height: height*0.2, justifyContent: 'center'}}>
            <Image style={{width: 40, height: 40}} source={require('../assets/Frame.png')} />
            <Text style={{fontFamily: 'DancingScript'}}>RoadPal</Text>
        </View>
        <View >
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='person-circle-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='newspaper-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Education</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='globe-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='help-circle-outline' type='ionicon' color='#292D32' size={25}/>
                <Text style={{fontSize: 18}}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='settings-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Settings</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}}>
                <Icon style={styles.icon} name='person-circle-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Invite a friend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', gap: 10, alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12}} onPress={authCtx.logout}>
                <Icon style={styles.icon} name='exit-outline' type='ionicon' color='#292D32' size={24}/>
                <Text style={{fontSize: 18}}>Sign out</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#fff',
        height: height,
        width: width*0.7,
        flex: 1,
        position: 'absolute'
    }
})