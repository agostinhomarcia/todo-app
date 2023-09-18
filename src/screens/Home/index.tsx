import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";

export function Home() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState<string[]>([]);

  function handleAddTask() {
    if (tasksList.includes(task)) {
      return Alert.alert(
        "Já Existe essa Tarefa",
        "Já existe uma tarefa com essa finalidade na lista"
      );
    }
    setTasksList([...tasksList, task]);
    setTask("");
  }
  function handleRemoveTask(taskToRemove: string) {
    Alert.alert("Remover", `Deseja remover está tarefa`, [
      {
        text: "Sim",
        onPress: () => {
          setTasksList((prevState) =>
            prevState.filter((task) => task !== taskToRemove)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.addTask}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar Tarefas"
          placeholderTextColor="#6b6b6b"
          onChangeText={(e) => setTask(e)}
          value={task}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasksList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            task={item}
            onRemove={() => handleRemoveTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nenhuma tarefa cadastrada!</Text>
        )}
      />
    </View>
  );
}
