import { View, Text, StyleSheet } from "react-native";

const Todo = ({ text }) => (
  <View style={styles.todoContainer}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#EBEBEB",
    padding: 10,
    borderRadius: 10,
  },
});

export default Todo;
