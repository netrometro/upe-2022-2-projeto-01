import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3962FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    NavContainer: {
      position:'absolute',
      alignItems: 'center',
      bottom: 20,
    },
  
    NavBar: {
      flexDirection: 'row',
      backgroundColor:'#eee',
      width: '90%',
      justifyContent: 'space-evenly',
      borderRadius:40
    },
  
    IconComportamento: {
      padding: 14
    },

    Icon: {
        height: 26,
        width: 26
    }

  });
  