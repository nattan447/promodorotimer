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
  const [completestyle, Setstyle] = useState({ textAlign: "center" });

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
  const handleinput = (text) => {
    callback(text);
    Setinputvalue(text);
  };
  function callback(conteudo) {
    Setoi(conteudo);
    const arrayobj = [
      ...array,
      { task: conteudo, id: id, status: "in constrution" },
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
  const addline = () => {
    return { textDecorationLine: "line-through" };
  };

  const keyExtractor = (item) => item.id;
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 20,
        }}
      >
        <Text style={Completetask}>{item.task}</Text>
        <Text style={Completetask}>{item.status}</Text>
      </View>
    );
  };

  const ItemSeparator = () => <View style={styles.separator} />;
  const test = () => {
    alert(props.seconds);
  };
  const Completetask = () => {
    Setstyle({ textDecorationLine: "line-through", textAlign: "center" });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={additem} style={styles.btn}>
          <Text
            style={{ color: "black", textAlign: "center", fontWeight: "bold" }}
          >
            ADD TASK
          </Text>
        </TouchableOpacity>

        {check ? (
          <View style={styles.listdiv}>
            <TouchableOpacity onPress={Completetask}>
              <Text style={completestyle}> all tasks completed?</Text>
            </TouchableOpacity>
            <FlatList
              data={array}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              ItemSeparatorComponent={ItemSeparator}
              style={{ padding: 30 }}
            ></FlatList>
          </View>
        ) : undefined}
      </View>

      {item}
      {/* <Button onPress={test} title="testando"></Button> */}
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
