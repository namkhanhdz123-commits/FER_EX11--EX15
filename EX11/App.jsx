import TodoList from "./listComponent/TodoList";
import SimpleCalculator from "./caculatorComponent/SimpleCalculator";
import GridCalculator from "./caculatorComponent/GridCalculator";
import SearchFilter from "./searchComponent/SearchFilter";

function App() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <section>
        <h2>Bài 1: Todo List</h2>
        <TodoList />
      </section>

      <section>
        <h2>Bài 2.1: Simple Calculator</h2>
        <SimpleCalculator />
      </section>

      <section>
        <h2>Bài 2.2: Grid Calculator</h2>
        <GridCalculator />
      </section>

      <section>
        <h2>Bài 3: Search Filter</h2>
        <SearchFilter />
      </section>
    </div>
  );
}

export default App;
