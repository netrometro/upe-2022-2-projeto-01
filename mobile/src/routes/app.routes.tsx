import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from "../pages/Inicio";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import { Allgenda } from '../pages/Allgenda';
import { Evento } from '../pages/Evento';
import { Button} from '@rneui/base';
import { THEME } from '../themes';
import Perfil from '../pages/Perfil';

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
                    headerBackVisible: false,
                    headerRight: () => (
                        <Button
                          onPress={() => alert('Colocar rota de perfil')}
                          color="#fff"
                          icon= {{ type: "font-awesome", name: "user", color: "#000" }}
                        />
                      ),
                }}
                
            />
            <Screen
                name='CadastrarEvento'
                component={Evento}
            />
            <Screen
                name='Perfil'
                component={Perfil}
            />
        </Navigator>
    )
}
