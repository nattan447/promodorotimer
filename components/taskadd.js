import { StatusBar } from "expo-status-bar";
import { createElement, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

export default function taskpart(props) {
  const [item, Setitem] = useState("");
  const [inputvalue, Setinputvalue] = useState("");
  const [oi, Setoi] = useState();
  const [check, Setcheck] = useState(false);
  const [styletask, Setstyletask] = useState(undefined);
  const [task, changetaks] = useState("ADD ITEM");

  const additem = () => {
    const div = (
      <View style={styles.divtask}>
        <TouchableOpacity style={styles.touchtask} onPress={close}>
          <Text style={styles.textbtn}>fechar</Text>
        </TouchableOpacity>

        <TextInput
          onChangeText={handleinput}
          placeholder="what are you working on?"
          style={setlistpromodoro.input}
        ></TextInput>
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <TouchableOpacity onPress={add}>
            <Text style={styles.textbtn}>adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    Setitem(div);
  };

  function handleinput(text) {
    callback(text);
    Setinputvalue(text);
  }
  function callback(conteudo) {
    Setoi(conteudo);
  }

  const add = () => {
    Setitem(undefined);
    changetaks("CHANGE ITEM");
    Setcheck(true);
    const style = {
      alignItems: "center",
      width: 200,
      height: 26,
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "space-around",
      borderRadius: 7,
      position: "absolute",
    };
    Setstyletask(style);
  };

  function close() {
    Setoi(oi);
    Setitem(false);
    Setinputvalue("");
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={additem} style={styles.btn}>
          <Text style={{ color: "white", textAlign: "center" }}>{task}</Text>
        </TouchableOpacity>

        {check ? (
          <View style={styletask}>
            <Text>{oi}</Text>
            <Text
              style={
                props.state == 1
                  ? { opacity: 0.6, color: "green" }
                  : { opacity: 0.6 }
              }
            >
              {props.state}/1
            </Text>
          </View>
        ) : undefined}
      </View>

      {item}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
    backgroundColor: "#ae1c1c",
    height: 26,
    width: 200,
    borderRadius: 7,
    position: "absolute",
    marginTop: 50,
  },
});
const setlistpromodoro = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 50,
  },
});
