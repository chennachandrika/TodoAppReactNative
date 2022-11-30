import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import Todo from "./Todo";

const TodoApp = () => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.todoAppWrapper}>
            <Text style={styles.titleFont}>Todo App</Text>
            <TextInput style={styles.input} placeholder="Add New Todo" />
            <View style={styles.todosWrapper}>
              <Todo text={"Task One"} />
            </View>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    backgroundColor: "#000",
    color: "white",
    borderRadius: 20,
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
