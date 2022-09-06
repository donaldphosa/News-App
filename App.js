import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Details from './components/Details';
import Home from './components/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  const Stack = createNativeStackNavigator()
const [detail,setDetail] = useState({})

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{title:'',headerShown:false}}  >
          {({navigation})=><Home navigation={navigation}  setDetail={setDetail}/>}
        </Stack.Screen>
        <Stack.Screen name='Details' options={{title:'',headerShown:false}}  >
          {({navigation})=><Details navigation={navigation} detail={detail} />}

        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
    </SafeAreaProvider>
 
  )
}