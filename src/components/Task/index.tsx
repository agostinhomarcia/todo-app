import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  task: string;
  onRemove: () => void;
};

export function Task({ task, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
