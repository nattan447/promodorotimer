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
import Task from "./taskadd";
import { Audio } from "expo-av";
export default function Promodoro({ navigation }) {
  const [couterpromo, Setcouterpromo] = useState(1);
  const names = ["START", "PAUSE"];
  const [minutes, Setminutes] = useState(1);
  const [seconds, Setsecondes] = useState(0);
  const [zeroseconds, Setzeroseconsds] = useState(0);
  const [zerominutes, Setzerominutes] = useState("");
  const [check, Setcheck] = useState(false);
  const [test, Settest] = useState(59);
  const [completask, Setcompletetask] = useState(0);

  const soundObject = new Audio.Sound();

  const playAudio = async () => {
    try {
      await soundObject.loadAsync(require("../assets/audios/alarm.mp3"));

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
      Setcompletetask(0);
      if (seconds == 0 && minutes == 0) {
        playAudio();
        Setcouterpromo(couterpromo + 1);
        Setcompletetask(1);
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
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 30, paddingTop: 30 }}>
          <Text
            style={{
              color: "#ae1c1c",
              fontSize: 23,
              textTransform: "uppercase",
            }}
          >
            promodorotimer
          </Text>
          <Text style={{ marginTop: 10 }}>helping students to get focus!</Text>
        </View>
        <StatusBar style="auto" />
        <View
          style={{
            width: 280,
            alignItems: "center",
            borderRadius: 2,
            height: 310,
            marginTop: 80,
            borderWidth: 2,
            backgroundColor: "black",
            marginBottom: 20,
          }}
        >
          <View style={styles.timerdiv}>
            <Text style={styles.time}>
              {zerominutes}
              {minutes}:{zeroseconds}
              {seconds}
            </Text>

            <TouchableOpacity style={styles.btnretro} onPress={changename}>
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: 400, height: 400, paddingBottom: 200 }}>
          <Task state={completask} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eecdce",
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
});
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
