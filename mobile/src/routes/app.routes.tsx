import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from "../pages/Inicio";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

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
        </Navigator>
    )
}
