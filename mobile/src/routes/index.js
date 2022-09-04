import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio, { Home } from "../pages/Inicio";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}