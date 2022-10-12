import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerForm: {
        backgroundColor: THEME.COLORS.BACKGROUND_FORM,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: "5%",
        width: "80%",
        marginBottom: 100,
    },
    text: {
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 12,
        alignSelf: "center",
    },
})