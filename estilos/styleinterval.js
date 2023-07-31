import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  time: {
    color: "white",
    fontSize: 70,
  },

  btnretro: {
    marginTop: 40,
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
  },
  buttonText: {
    color: "black", // Texto branco para contraste
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  timerdiv: {
    marginRight: 10,
    alignItems: "center",
    width: 280,
    height: 300,
    borderRadius: 8,
    paddingTop: 80,
    backgroundColor: "#242222", // Cor laranja vibrante típica dos anos 90
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: "black", // Cor preta para a borda grossa
    shadowColor: "#000000", // Cor preta para a sombra
    shadowOpacity: 0.4,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
  },
  borderdiv: {
    width: 280,
    alignItems: "center",
    borderRadius: 2,
    height: 310,
    marginTop: 80,
    borderWidth: 2,
    backgroundColor: "black",
    marginBottom: 20,
  },
});
