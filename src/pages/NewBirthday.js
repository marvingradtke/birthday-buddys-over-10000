import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  width: 80%;
`;

/* const Done = styled.div`
  margin-bottom: 20px;
`;

const DoneCheckbox = styled.checkbox`
  background: whitesmoke;
`; */

function NewBirthday() {
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(name, done);
    await fetch("http://localhost:1111/birthdays", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, done })
    });
    setName("");
    setDone(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Birthday</h2>
      <NameInput
        autoFocus
        type="text"
        placeholder="When`s your Birthday?"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <button>Submit</button>
    </Form>
  );
}

export default NewBirthday;
