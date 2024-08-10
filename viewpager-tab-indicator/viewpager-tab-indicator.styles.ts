import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: 350,
  },
  gradiantBottom: {
    height: "15%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 1,
  },

  gradiantTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "20%",
    transform: [{rotate: "180deg"}],

    zIndex: 1,
  },
  btnHiddenLeft: {
    position: "absolute",
    left: 0,
    height: "100%",
    width: "50%",
  },
  btnHiddenRight: {
    position: "absolute",
    right: 0,
    height: "100%",
    width: "50%",
  },
  btnLeft: {
    position: "absolute",
    left: 20,
    top: "50%",
  },
  btnRight: {
    position: "absolute",
    right: 20,
    top: "50%",
  },
  shadow: {
    shadowRadius: 10,
    shadowColor: "rgba(255,255,255,0.3)",
    shadowOpacity: 1,
    elevation: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 30,
  },

  right: {
    transform: [{rotate: "180deg"}],
  },
  down: {transform: [{rotate: "-90deg"}]},
  list: {width: "100%", height: 350, zIndex: 0},
  listcontentContainer: {
    width: "100%",
    height: "100%",
  },
  indicator: {position: "absolute", bottom: 10, zIndex: 2},
});
