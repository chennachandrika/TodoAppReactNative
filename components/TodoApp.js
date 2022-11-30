import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import Todo from "./Todo";

const TodoApp = ({ navigation }) => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState();
  const handleList = () => {
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };
  const renderTodoAdder = () => (
    <View style={styles.addTodo}>
      <TextInput
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
        style={styles.input}
        placeholder="Add New Todo"
      />
      <Button title="+" onPress={() => handleList()} />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoAppWrapper}>
        <Text style={styles.titleFont}>Todo App</Text>
        {renderTodoAdder()}
        <View style={styles.todosWrapper}>
          {todoList &&
            todoList.map((todo, i) => (
              <Text
                key={i}
                numberOfLines={1}
                style={styles.todoContainer}
                onPress={() => navigation.navigate("Todo", { name: todo })}
              >
                {todo}
              </Text>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: "#EBEBEB",
        padding: 10,
        borderRadius: 10,
        margin:4
      },
  addTodo: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderColor: "#EBEBEB",
    borderWidth: 1,
    borderRadius: 20,
  },
  input: {
    color: "black",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  todoAppWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    width: "100%",
  },
  titleFont: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  todosWrapper: {
    width: "100%",
    marginTop: 20,
  },
});

export default TodoApp;
