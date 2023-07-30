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
  FlatList,
} from "react-native";
import styles from "../estilos/styles";
import Promodoro from "./promodoro";

export default function Taskpart(props) {
  const [item, Setitem] = useState("");
  const [inputvalue, Setinputvalue] = useState("");
  const [oi, Setoi] = useState();
  const [check, Setcheck] = useState(false);
  const [array, Setarray] = useState([]);
  const [id, Setid] = useState(0);

  const additem = () => {
    const div = (
      <View style={styles.divtask}>
        <TouchableOpacity style={styles.touchtask} onPress={close}>
          <Text style={styles.textbtn}>close</Text>
        </TouchableOpacity>

        <TextInput
          onChangeText={handleinput}
          placeholder="what are you working on?"
          style={setlistpromodoro.input}
        ></TextInput>
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <TouchableOpacity onPress={add}>
            <Text style={styles.textbtn}>add</Text>
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
    const arrayobj = [
      ...array,
      { task: conteudo, id: id, status: props.state },
    ];
    Setarray(arrayobj);
  }

  const add = () => {
    Setitem(undefined);
    Setid(id + 1);
    Setcheck(true);
  };

  const close = () => {
    Setoi(oi);
    Setarray(array);
    Setitem(false);
    Setinputvalue("");
  };

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text>{item.task}</Text>
        <Text style={props.state === 1 ? { color: "green" } : undefined}>
          {item.status}/1
        </Text>
      </View>
    );
  };

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={additem} style={styles.btn}>
          <Text style={{ color: "black", textAlign: "center" }}>ADD ITEM</Text>
        </TouchableOpacity>

        {check ? (
          <View style={styles.listdiv}>
            <FlatList
              data={array}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              ItemSeparatorComponent={ItemSeparator}
            ></FlatList>
          </View>
        ) : undefined}
      </View>

      {item}

      <StatusBar style="auto" />
    </View>
  );
}

const setlistpromodoro = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 50,
  },
});
