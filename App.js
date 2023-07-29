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
import { Audio } from "expo-av";

function Interval({ route }) {
  // const { promodorocouter } = route.params;
  const arraynames = ["Start", "Pause"];
  const [fakeminutes, newfakeminutes] = useState("5");
  const [minutes, newminutes] = useState(1);
  const [seconsds, newseconds] = useState(0);
  const [fakeseconds, newfakeseconds] = useState(59);
  const [check, newcheck] = useState(false);
  const [zeroseconds, newzeroseconds] = useState(0);
  const [numberview, Setnumberview] = useState(5);
  const soundObject = new Audio.Sound();
  const playAudio = async () => {
    try {
      await soundObject.loadAsync(require("./assets/audios/alarm.mp3"));

      await soundObject.playAsync();
    } catch (error) {
      console.error("Erro ao reproduzir o áudio:", error);
    }
  };

  useEffect(() => {
    return () => {
      soundObject.unloadAsync();
    };
  }, []);

  const [btnname, Setbtname] = useState(arraynames[0]);
  const clickbtn = () => {
    const savename = arraynames[1];
    const switchname =
      btnname === arraynames[0] ? arraynames[1] : arraynames[0];
    Setbtname(switchname);
    newcheck(!check);
  };

  useEffect(() => {
    if (check) {
      const myinterval = setInterval(() => {
        newfakeseconds((second) => second - 1);
      }, 1000);
      newfakeminutes("");

      newseconds(fakeseconds);
      seconsds >= 10 ? newzeroseconds("") : newzeroseconds(0);
      seconsds == 0 ? newminutes(minutes - 1) : "";
      seconsds == 0 ? newfakeseconds(59) : "";
      const oi = () => {};
      if (seconsds === 0 && minutes === 0) {
        playAudio();
        newminutes(5);
        newcheck(false);
        const newname =
          btnname === arraynames[0] ? arraynames[1] : arraynames[0];
        Setbtname(newname);

        newseconds(0);
      }
      return () => {
        clearInterval(myinterval);
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
        <View style={pausestyles.timediv}>
          <Text style={pausestyles.timerstyle}>
            0{minutes}:{zeroseconds}
            {seconsds}
          </Text>
          <TouchableOpacity style={styles.Button} onPress={clickbtn}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                textTransform: "uppercase",
                color: "#43C6DB",
              }}
            >
              {btnname}
            </Text>
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
        <Tab.Screen name="interval" component={Interval} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const pausestyles = StyleSheet.create({
  timerstyle: {
    fontSize: 70,
    color: "white",
  },
  timediv: {
    alignItems: "center",
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#43C6DB",
    width: 280,
    height: 300,
    borderRadius: 20,
    paddingTop: 80,
  },
});

// export default function home() {
//   return <App />;
// }

const Homepage = ({ navigation }) => {
  const [couterpromo, Setcouterpromo] = useState(1);
  const names = ["START", "PAUSE"];
  const [minutes, Setminutes] = useState(30);
  const [seconds, Setsecondes] = useState(0);
  const [zeroseconds, Setzeroseconsds] = useState(0);
  const [zerominutes, Setzerominutes] = useState("");
  const [check, Setcheck] = useState(false);
  const [test, Settest] = useState(59);

  const soundObject = new Audio.Sound();

  const playAudio = async () => {
    try {
      await soundObject.loadAsync(require("./assets/audios/alarm.mp3"));

      await soundObject.playAsync();
    } catch (error) {
      console.error("Erro ao reproduzir o áudio:", error);
    }
  };

  useEffect(() => {
    return () => {
      soundObject.unloadAsync();
    };
  }, []);

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
      seconds == 0 ? Settest(59) : "nada";
      seconds == 0 ? Setminutes(minutes - 1) : "nada";
      minutes >= 10 ? Setzerominutes("") : Setzerominutes(0);
      seconds >= 10 ? Setzeroseconsds("") : Setzeroseconsds(0);
      if (seconds == 0 && minutes == 0) {
        playAudio();
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
      <View style={styles.timerdiv}>
        <Text style={styles.time}>
          {zerominutes}
          {minutes}:{zeroseconds}
          {seconds}
        </Text>

        <TouchableOpacity style={styles.Button} onPress={changename}>
          <Text style={styles.textbutton}>{name}</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 16 }}>{couterpromo}#</Text>
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
