import Inicio from "../pages/Inicio";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator();

const AuthRoutes : React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
    <AuthStack.Screen name="Cadastro" component={Cadastro} /> 
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
)

export default AuthRoutes;