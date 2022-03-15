import { useState } from 'react';
import styled from 'styled-components';

export default function EntryForm() {
  const [newEntry, setNewEntry] = useState('');

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="entry-form">Create a form: </Label>
      <StyledInput
        name="entry-form"
        id="entry-form"
        placeholder="write some Text..."
        onChange={event => setNewEntry(event.target.value)}
        value={newEntry}
      ></StyledInput>
      <StyledButton>Submit</StyledButton>
    </FormWrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newEntry);
    setNewEntry('');
  }
}

const FormWrapper = styled.form`
  background-color: mistyrose;
  display: flex;
  height: 48px;
  bottom: 0;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  border: 1px solid midnightblue;
  border-radius: 4px;
  padding: 7px;
  margin: 0 7px;
  font-style: italic;
  background-color: lightcyan;
  font-size: 0.8rem;
`;

const StyledButton = styled.button`
  border: 1px solid midnightblue;
  padding: 5px;
  border-radius: 999px;
  background-color: rosybrown;
  color: azure;
  font-size: 0.9rem;
`;
const Label = styled.label`
  font-size: 1.2rem;
  color: midnightblue;
`;
