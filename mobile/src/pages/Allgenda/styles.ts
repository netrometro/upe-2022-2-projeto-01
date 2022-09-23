import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND,
        flex: 1,
        alignItems: "center",
    },
    title: {
        alignSelf: "center",
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 12,
    },
    ads: {
        backgroundColor: THEME.COLORS.BACKGROUND_FORM,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: "5%",
        width: "80%",
        height: "60%",
        marginTop: "10%"
    },
    button: {
        position: "absolute",
        backgroundColor: THEME.COLORS.BACKGROUND_FORM,
        borderRadius: 50,
        paddingVertical: 8,
        width: "80%",
        alignSelf: "center",
        bottom: "20%",
        alignItems: "center",
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
      },
})