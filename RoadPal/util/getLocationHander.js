import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location"
import { Alert } from "react-native"

async function verifyPermissions() {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission()

        return permissionResponse.granted
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
            'Insufficient Permissions!',
            'You need to grant location permissions to use this app.'
        )
        
        return false
    }
}

export async function getLocationHandler() {
    const hasPermission = await verifyPermissions()
    
    if (!hasPermission){
        return
    }

    const location = await getCurrentPositionAsync({timeInterval: 10});
    console.log(location)
}
