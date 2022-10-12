import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      title: {
        alignSelf: "center",
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 20,
        color: "#fff",
      },
      text: {
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 12,
        width: "80%",
        color: "#fff",
        textAlign: "justify"
      },
      allgenda:{
        marginTop: 25,
        alignSelf: "center",
        fontSize: THEME.FONT_SIZE.SP_LG,
        fontWeight: "bold",
        color: THEME.COLORS.BACKGROUND,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10
      }
})