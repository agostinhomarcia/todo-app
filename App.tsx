import { StatusBar } from "react-native";
import TodoList from "./src/components/TodoList";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <TodoList />
    </>
  );
}
