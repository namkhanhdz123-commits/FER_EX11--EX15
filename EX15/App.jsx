import React from "react";
import CounterReducer from "./CounterReducer";
import QuestionBank from "./QuestionBank";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <section style={{ marginBottom: "40px" }}>
        <h2>Exercise 1: Counter with useReducer</h2>
        <CounterReducer />
      </section>

      <hr />

      <section style={{ marginTop: "40px" }}>
        <h2>Exercise 2: Question Bank</h2>
        <QuestionBank />
      </section>
    </div>
  );
}

export default App;
