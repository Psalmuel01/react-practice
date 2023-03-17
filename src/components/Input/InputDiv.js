import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./InputDiv.module.css";
import ErrorModal from "../UI/ErrorModal";

function InputDiv(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  function addInput(e) {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUsers(name, age);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function handleError() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onExit={handleError}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button onClick={addInput} type="button">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default InputDiv;
