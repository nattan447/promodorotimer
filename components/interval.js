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
import { Audio } from "expo-av";

export default function Interval({ route }) {
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
