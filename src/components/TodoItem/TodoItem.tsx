import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { styles } from "./styles";

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        value={completed}
        onValueChange={onToggle}
        tintColors={{ true: "green", false: "red" }}
      />
      <Text style={completed ? styles.completedText : styles.text}>{text}</Text>
    </View>
  );
};

export default TodoItem;
