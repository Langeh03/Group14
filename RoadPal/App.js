import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import SplashScreen from './screens/Splash';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import BottomNavigation from './Navigation/BottomNavigation';
import Welcomescreen from './screens/Welcomescreen';
import Validation from './screens/Validation';
import ComfirmPasswordReset from './screens/ComfirmPasswordReset';

import SavedDestinations from './screens/SavedDestinations';
import AddSavedDestination from './screens/AddSavedDestination';
import RoadSigns from "./screens/RoadSign";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splashscreen" component={SplashScreen} />
      <Stack.Screen name="Welcomescreen" component={Welcomescreen} />  
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Validation" component={Validation} />
      <Stack.Screen name="ComfirmPassword" component={ComfirmPasswordReset} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="SavedDestinations" component={SavedDestinations} />
      <Stack.Screen name="AddDestinations" component={AddSavedDestination} />
      <Stack.Screen name="RoadSigns" component={RoadSigns} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext)

  return(
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token')

      if (storedToken) {
        authCtx.authenticate(storedToken) 
      }
    }

    fetchToken()
  }, [])

  return <Navigation />
}

export default function App() {

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </Provider>
  );
}