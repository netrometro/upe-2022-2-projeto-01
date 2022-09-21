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
    width: "80%",
    marginBottom: 100,
  },
  text: {
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 12,
    alignSelf: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
  },
});
