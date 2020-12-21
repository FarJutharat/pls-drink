import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FDFF",
  },
  brandTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  italic: {
    fontStyle: "italic",
  },
  primaryColor: {
    color: "#0f4c75",
  },
  button: {
    width: 200,
    backgroundColor: "#fff",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 20,
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
});
