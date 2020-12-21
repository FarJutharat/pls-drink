import { StyleSheet } from "react-native";

export const waterStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    position: "relative",
  },
  timeTitle: {
    fontSize: 40,
    color: "#0f4c75",
    alignSelf: "center",
    fontWeight: "bold",
  },
  glassImage: {
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  subWaterTitle: {
    fontSize: 14,
    color: "#000",
    alignSelf: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drinkButton: {
    backgroundColor: "#0f4c75",
    width: 100,
    marginHorizontal: 20,
  },
  cancelButton: {
    width: 100,
    marginHorizontal: 20,
  },
});
