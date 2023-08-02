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
} from "react-native";

import Promodoro from "./components/promodoro";
import Interval from "./components/interval";
import Task from "./components/taskadd";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Audio } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="Promodoro"
          component={Promodoro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-timer" size={size} color="black" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="interval"
          component={Interval}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="timer-outline" size={size} color="#000" />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  buttondiv: {
    flexDirection: "row",
  },
  Button: {
    borderRadius: 9,
    backgroundColor: "white",
    width: 85,
    paddingTop: 5,
    height: 36,
    marginHorizontal: 13,

    marginTop: 40,
  },
  textbutton: {
    fontSize: 14,
    color: "#FF6347",

    textAlign: "center",
    textTransform: "uppercase",
  },
  time: {
    color: "white",
    fontSize: 70,
  },
  timerdiv: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#FF6347",
    width: 280,
    height: 300,
    borderRadius: 20,
    paddingTop: 80,
  },
});
