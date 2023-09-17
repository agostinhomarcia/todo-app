import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TodoItem from "../TodoItem/TodoItem";
import { styles } from "./styles";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar uma tarefa..."
        placeholderTextColor="#6b6b6b"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            text={item.text}
            completed={item.completed}
            onToggle={() => toggleTodo(item.id)}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
