import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME.COLORS.BACKGROUND,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    containerForm: {
      backgroundColor: THEME.COLORS.BACKGROUND_FORM,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      padding: "5%",
    },
    title: {
      alignSelf: "center",
      fontSize: THEME.FONT_SIZE.SP_LG,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 12,
    },
    text: {
      fontSize: THEME.FONT_SIZE.LG,
      marginBottom: 12,
    },
    login: {
      color: THEME.COLORS.OVERLAY,
      alignSelf: "center",
    },
    button: {
      position: "absolute",
      backgroundColor: THEME.COLORS.BACKGROUND_FORM,
      borderRadius: 50,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "15%",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  