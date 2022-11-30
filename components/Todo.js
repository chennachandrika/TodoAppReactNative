import { View, Text, StyleSheet } from "react-native";

const Todo = ( { navigation, route } ) => (
  <View style={styles.todoContainer}>
    <Text>{route.params.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#EBEBEB",
    padding: 10,
    borderRadius: 10,
    margin:4
  },
});

export default Todo;
