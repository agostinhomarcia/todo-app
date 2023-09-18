import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000009",
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 25,
  },
  addTask: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 2,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginLeft: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#00FF23",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
  },
  task: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  completedTask: {
    padding: 12,
    backgroundColor: "#c0f0c0",
    borderRadius: 5,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#555",
  },
  listEmpty: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
