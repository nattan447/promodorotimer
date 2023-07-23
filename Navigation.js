import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
import { App } from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function PageTest({ route }) {
  const { variavel } = route.params;
  const [couter, Setcouter] = useState(variavel);

  useEffect(
    function () {
      setInterval(() => {
        Setcouter((number) => number - 1);
      }, 1000);
    },
    [variavel]
  );

  return (
    <View>
      <Text>número: {couter}</Text>
    </View>
  );
}

function HomePage({ navigation }) {
  const [couter, Setcounter] = useState(0);
  const [input, Setinput] = useState("");
  function takevalue(value) {
    Setcounter(value);
    Setinput(value);
  }

  const clickme = () => {
    navigation.navigate("PageTest", { variavel: input });
  };

  return (
    <View>
      <TextInput
        placeholder="00:00"
        value={input}
        keyboardType="numeric"
        onChangeText={takevalue}
        style={{
          marginTop: 100,
          textAlign: "center",
          fontSize: 60,
          marginBottom: 30,
        }}
      ></TextInput>
      <Text style={{ fontSize: 30, marginBottom: 20, textAlign: "center" }}>
        {couter}
      </Text>
      <Button title="Ir para PageTest" onPress={clickme} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="PageTest" component={PageTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
