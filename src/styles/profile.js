import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: 40,
  },
  section: {
    flexDirection: "column",
  },
  genderImageSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  labelFormText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  genderImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textInput: {
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});
