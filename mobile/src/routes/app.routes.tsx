import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
