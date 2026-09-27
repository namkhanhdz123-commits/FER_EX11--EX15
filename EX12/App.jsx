import Counter from "./Counter";
import ControlledInput from "./ControlledInput";
import ToggleVisibility from "./ToggleVisibility";
import TodoList from "./TodoList";
import ColorSwitcher from "./ColorSwitcher";
import DragAndDropList from "./DragAndDropList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <section>
        <h2>Bài 1: Counter</h2>
        <Counter />
      </section>
      <hr />

      <section>
        <h2>Bài 2: Controlled Input</h2>
        <ControlledInput />
      </section>
      <hr />

      <section>
        <h2>Bài 3: Toggle Visibility</h2>
        <ToggleVisibility />
      </section>
      <hr />

      <section>
        <h2>Bài 4: Todo List</h2>
        <TodoList />
      </section>
      <hr />

      <section>
        <h2>Bài 5: Color Switcher</h2>
        <ColorSwitcher />
      </section>
      <hr />

      <section>
        <h2>Bài 6: Drag and Drop List</h2>
        <DragAndDropList />
      </section>
    </div>
  );
}

export default App;
