import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from "@react-navigation/native";

import { Allgenda } from '../pages/Allgenda';
import { Evento } from '../pages/Evento';
import { Button} from '@rneui/base';
import { THEME } from '../themes';
import Perfil from '../pages/Perfil';
import Ajuda from '../pages/Ajuda';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    const navigation = useNavigation();
    return(
        <Navigator>
        <Screen
            name='Allgenda'
            component={Allgenda}
            options={{
                headerTitleAlign: 'center',
                navigationBarHidden: true, 
                headerBackVisible: false,
                headerRight: () => (
                    <Button
                        onPress={() => alert('Colocar rota de perfil')}
                        color="#fff"
                        icon= {{ type: "font-awesome", name: "user", color: "#000" }}
                    />       
                ),
                headerLeft: () => (
                    <Button
                        onPress={() => navigation.navigate("Ajuda")}
                        color="#fff"
                        icon= {{ type: "font-awesome", name: "question", color: "#000" }}
                    />
                )
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
            <Screen
                name='Ajuda'
                component={Ajuda}
            />
        </Navigator>
    )
}
