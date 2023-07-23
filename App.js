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

function Promodoro({ route }) {
  // const { takeseconsds, takeminutes, check } = route.params;

  function test() {}

  const unpause = () => {};
  const pause = () => {};

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={stylespormodorto.timerstyle}>sexo</Text>
        </View>
        <View style={styles.buttondiv}>
          <TouchableOpacity style={styles.Button} onPress={test}>
            <Text style={styles.textbutton}>test btn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={pause}>
            <Text style={styles.textbutton}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={unpause}>
            <Text style={styles.textbutton}>unPause</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="interval" component={Promodoro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function home() {
//   return <App />;
// }

const Homepage = ({ navigation }) => {
  const [couterpromo, Setcouterpromo] = useState(1);
  const names = ["START", "PAUSE"];
  const [minutes, Setminutes] = useState(0);
  const [seconds, Setsecondes] = useState(0);
  const [zeroseconds, Setzeroseconsds] = useState(0);
  const [zerominutes, Setzerominutes] = useState("");
  const [check, Setcheck] = useState(false);
  const [test, Settest] = useState(59);

  const [name, newname] = useState(names[0]);
  const changename = () => {
    const newName = name === names[0] ? names[1] : names[0];
    newname(newName);
    Setcheck(!check);
  };

  useEffect(() => {
    if (check) {
      const setinterval = setInterval(() => {
        Settest((number) => number - 1);
      }, 1000);
      Setsecondes(test);
      test == 0 ? Settest(59) : "nada";
      test == 0 ? Setminutes(minutes - 1) : "nada";
      minutes >= 10 ? Setzerominutes("") : Setzerominutes(0);
      test >= 10 ? Setzeroseconsds("") : Setzeroseconsds(0);
      if (test == 0 && minutes == 0) {
        Setcouterpromo(couterpromo + 1);
        Setsecondes(0);
        Setminutes(30);
        Setcheck(false);
        Setzerominutes("");
        const newset = name === names[0] ? names[1] : names[0];
        newname(newset);
      }
      return () => {
        clearInterval(setinterval);
      };
    }
  });

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, paddingTop: 30 }}>
        <Text
          style={{ color: "red", fontSize: 23, textTransform: "uppercase" }}
        >
          promodorotimer
        </Text>

        <Text style={{ marginTop: 10 }}>helping students to get focus!</Text>
      </View>
      <StatusBar style="auto" />

      <Text style={styles.time}>
        {zerominutes}
        {minutes}:{zeroseconds}
        {seconds}
      </Text>

      <TouchableOpacity style={styles.Button} onPress={changename}>
        <Text style={styles.textbutton}>{name}</Text>
      </TouchableOpacity>
      <Text>{couterpromo}#</Text>
    </View>
  );
};

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
    backgroundColor: "black",
    width: 85,
    paddingTop: 5,
    height: 36,
    marginHorizontal: 13,
    marginTop: 40,
  },
  textbutton: {
    fontSize: 14,
    color: "white",

    textAlign: "center",
    textTransform: "uppercase",
  },
  time: {
    color: "red",
    fontSize: 70,
    marginTop: 100,
  },
});
const stylespormodorto = StyleSheet.create({
  timerstyle: {
    fontSize: 60,
    color: "black",
    marginBottom: 40,
  },
});
