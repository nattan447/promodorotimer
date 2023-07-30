import { createElement, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
/**estilos task*/
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#white",
    alignItems: "center",
    justifyContent: "center",
  },
  divtask: {
    backgroundColor: "white",
    height: 200,
    width: 300,
    zIndex: 2,
    borderRadius: 11,
  },

  touchtask: {
    height: 25,
    width: 44,
    borderRadius: 14,
    marginTop: 10,
    marginLeft: 10,
  },
  textbtn: {
    textAlign: "center",
    color: "red",
  },
  btn: {
    backgroundColor: "white", // Cor laranja vibrante típica dos anos 90
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000000", // Cor preta para a borda grossa
    shadowColor: "#000000", // Cor preta para a sombra
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    position: "absolute",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  },
  listdiv: {
    marginTop: 70,
    position: "absolute",
    width: 230,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
});
