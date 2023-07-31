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
import { LinearGradient } from "expo-linear-gradient";
import Task from "./taskadd";
import { Audio } from "expo-av";
import Stylepromo from "../estilos/stylepromo";
import stylepromo from "../estilos/stylepromo";
export default function Promodoro({ navigation }) {
  const [couterpromo, Setcouterpromo] = useState(1);
  const names = ["START", "PAUSE"];
  const [minutes, Setminutes] = useState(1);
  const [seconds, Setsecondes] = useState(0);
  const [zeroseconds, Setzeroseconsds] = useState(0);
  const [zerominutes, Setzerominutes] = useState("");
  const [check, Setcheck] = useState(false);
  const [test, Settest] = useState(59);
  const [completask, Setcompletetask] = useState("in progress");

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
        Setcompletetask("completed");
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
      <View style={stylepromo.container}>
        <LinearGradient
          s
          colors={["#292727", "#393535", "#31259B"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.5, 0.25, 0.25]}
          style={{ alignItems: "center" }}
        >
          <View style={{ marginTop: 30, paddingTop: 30 }}>
            <Text style={pausestyles.promodorotext}>promodorotimer</Text>
          </View>
          <StatusBar style="auto" />
          <View style={stylepromo.borderdiv}>
            <View style={stylepromo.timerdiv}>
              <Text style={stylepromo.time}>
                {zerominutes}
                {minutes}:{zeroseconds}
                {seconds}
              </Text>

              <TouchableOpacity
                style={stylepromo.btnretro}
                onPress={changename}
              >
                <Text style={stylepromo.buttonText}>{name}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: 400, height: 400, paddingBottom: 200 }}>
            <Task state={completask} />
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
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
  promodorotext: {
    color: "white",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 4,
    fontWeight: "bold",
  },
});
