import { useState } from "react";
import InputDiv from "./Input/InputDiv";
import InputDetails from "./Input/InputDetails";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }
  return (
    <div>
      <InputDiv onAddUsers={addUserHandler} />
      <InputDetails users={usersList} />
    </div>
  );
}

export default App;
