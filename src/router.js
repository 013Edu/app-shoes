
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Feather } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native'

import Home from './pages/Home'
import Detail from './pages/Detail'

const Stack = createNativeStackNavigator()

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name='Detail'
                component={Detail}
                options={{
                    headerShown: true,
                    headerRight: () =>(
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                             name='shopping-cart'
                             size={23}
                             color= 'black'
                             />
                        </TouchableOpacity>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}