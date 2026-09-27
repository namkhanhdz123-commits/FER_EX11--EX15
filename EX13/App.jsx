import React, { useState } from "react";
import UserPosts from "./UserPosts";
import CountdownTimer from "./CountdownTimer";
import WindowSize from "./WindowSize";
import ValidatedInput from "./ValidatedInput";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(1);

  // Hàm validate ví dụ: Nhập ít nhất 5 ký tự
  const validateMinLength = (val) => val.length >= 5;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <section>
        <h2>Bài 1: Data Fetching</h2>
        <label>Select User ID: </label>
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(Number(e.target.value))}
        >
          <option value={1}>User 1</option>
          <option value={2}>User 2</option>
          <option value={3}>User 3</option>
        </select>
        <UserPosts userId={selectedUserId} />
      </section>
      <hr />

      <section>
        <h2>Bài 2: Countdown Timer</h2>
        <CountdownTimer initialValue={10} />
      </section>
      <hr />

      <section>
        <h2>Bài 3: Window Resize Listener</h2>
        <WindowSize />
      </section>
      <hr />

      <section>
        <h2>Bài 4: Form Input Validation</h2>
        <ValidatedInput
          validationFunction={validateMinLength}
          errorMessage="Chuỗi nhập vào phải có ít nhất 5 ký tự!"
        />
      </section>
    </div>
  );
}

export default App;
