import { color } from "@rneui/base";
import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover: {
    width: 240,
    justifyContent: "flex-start",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: THEME.COLORS.TEXT,
    padding: 20,
    marginTop: 25
  },
  footer: {
    width: "100%",
    height: 120,
    padding: 16,
    justifyContent: "flex-end",
  },
  name: {
    color: "#000",
    fontSize: THEME.FONT_SIZE.MD,
  },
  eventos: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
