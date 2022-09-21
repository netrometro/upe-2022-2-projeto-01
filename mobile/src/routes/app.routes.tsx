import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from "../pages/Inicio";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import { Allgenda } from '../pages/Allgenda';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <Navigator>
            <Screen
                name='Inicio'
                component={Inicio}
                options={{headerShown: false}}
            />
            <Screen
                name='Cadastro'
                component={Cadastro}
            />
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name='Allgenda'
                component={Allgenda}
                options={{
                    navigationBarHidden: true, 
                    headerBackVisible: false
                }}
            />
        </Navigator>
    )
}
