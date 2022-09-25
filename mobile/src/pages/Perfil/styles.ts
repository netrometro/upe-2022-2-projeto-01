import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#11b9f5",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      containerForm: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: "5%",
      },
      title: {
        alignSelf: "center",
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 12,
      },
      text: {
        fontSize: 24,
        marginBottom: 12,
      },
      login: {
        color: "#a1a1a1",
        alignSelf: "center",
      },
      button: {
        position: "absolute",
        backgroundColor: "#fff",
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