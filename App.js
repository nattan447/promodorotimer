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
  const { takeseconsds, takeminutes, check } = route.params;
  const noaccentsec = takeseconsds
    .split("")
    .filter((element) => element != ":")
    .join("");

  const [minutes, Setminutes] = useState(Number(takeminutes));
  const [seconds, Setseconds] = useState(Number(noaccentsec));
  const [checker, Setchecker] = useState(check);

  function test() {
    alert(takeseconsds);
  }

  const unpause = () => {
    Setchecker(true);
  };
  const pause = () => {
    Setchecker(false);
  };

  useEffect(function () {
    if (check) {
      const defineinterval = setInterval(() => {
        Setseconds((number) => number - 1);
      }, 1000);

      return () => {
        clearInterval(defineinterval);
      };
    }
  });

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
          <Text style={stylespormodorto.timerstyle}>
            {takeminutes}:{seconds}
          </Text>
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
        <Tab.Screen name="Promodoro" component={Promodoro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function home() {
//   return <App />;
// }

const Homepage = ({ navigation }) => {
  const [inputvalue, Setvalue] = useState(":00");
  const [couter, Setcounter] = useState(0);
  const [minutes, Setminutes] = useState("00");
  const [check, Setcheck] = useState(false);
  const [zeros, Setzeros] = useState("");
  const [zerostwo, Setzerostwo] = useState("");
  const [conterminutes, Setcouterminutes] = useState(0);

  // useEffect(() => {
  //   alert(inputvalue);
  // }, [inputvalue]);
  const darkmode = () => {
    return {
      backgroundColor: "black",
    };
  };

  function handleminutes(minutes) {
    Setminutes(minutes);
    Setcouterminutes(Number(minutes));
  }

  function handlevaluetimer(text) {
    Setvalue(text);
    Setcounter(
      Number(
        text
          .split("")
          .filter((element) => element != "" && element != ":")
          .join("")
      )
    );
  }

  const pause = () => {
    Setcheck(false);
  };
  function linkwindowns() {
    navigation.navigate("Promodoro", {
      takeseconsds: inputvalue,
      takeminutes: minutes,
      check: check,
    });
  }
  const clickme = () => {
    Setcheck(!check);
    alert(check);
    setTimeout(linkwindowns, 2000);
  };

  useEffect(() => {
    if (check) {
      const setinterval = setInterval(() => {
        Setcounter((prevecounte) => prevecounte - 1);
      }, 1000);
      if (couter == 1 && conterminutes == 0) {
        Setcheck(false);
        Setcounter(0);
        Setcouterminutes(0);
      }

      conterminutes === 60 ? Setcouterminutes(10) : "";
      couter < 10 ? Setzeros("0") : Setzeros("");
      conterminutes < 10 ? Setzerostwo("0") : Setzerostwo("");

      if (couter == 0) {
        Setcounter(59);
        Setcouterminutes((accmin) => accmin - 1);
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
      <View style={styles.Settimediv}>
        <View style={styles.divinput}>
          <TextInput
            maxLength={2}
            keyboardType="numeric"
            style={styles.input}
            value={minutes}
            onChangeText={handleminutes}
          ></TextInput>
          <TextInput
            value={inputvalue}
            onChangeText={handlevaluetimer}
            style={styles.input}
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={styles.buttondiv}>
          <TouchableOpacity onPress={clickme} style={styles.Button}>
            <Text style={styles.textbutton}>start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pause} style={styles.Button}>
            <Text style={styles.textbutton}>pause</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ marginTop: 60, fontSize: 80 }}>
        {" "}
        {zerostwo}
        {conterminutes}:{zeros}
        {couter}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  input: {
    fontSize: 60,
    color: "black",
    marginBottom: 30,
  },
  divinput: {
    flexDirection: "row",

    borderTopColor: "black",
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
  },
  textbutton: {
    fontSize: 14,
    color: "white",

    textAlign: "center",
    textTransform: "uppercase",
  },
  Settimediv: {
    borderRadius: 20,
    backgroundColor: "aliceblue",
    alignItems: "center",
    marginTop: 100,
    height: 240,
    justifyContent: "center",
    width: 260,
  },
});
const stylespormodorto = StyleSheet.create({
  timerstyle: {
    fontSize: 60,
    color: "black",
    marginBottom: 40,
  },
});
