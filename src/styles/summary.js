import { StyleSheet } from "react-native";

export const summaryStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    position: "relative",
  },
  percentageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontSize: 60,
    fontWeight: "bold",
    zIndex: 1111,
  },
  topContainer: {
    width: "100%",
    backgroundColor: "transparent",
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: "#2da3f2",
  },
  backButtonFixedPosition: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  historyButtonFixedPosition: {
    position: "absolute",
    bottom: 80,
    alignItems: "center",
  },
  doneButtonFixedPosition: {
    position: "absolute",
    bottom: 130,
    alignItems: "center",
  },
});
