import styled from 'styled-components';

export default function UserPage({ onCreateAuthor }) {
  return (
    <>
      <form onSubmit={handleUserSubmit} aria-labelledby="user-page">
        <Label htmlFor="userName">What is your name?</Label>
        <StyledInput
          name="userName"
          id="userName"
          autoComplet="off"
          placeholder="your name..."
          type="text"
          required
        ></StyledInput>
        <button>Save</button>
      </form>
    </>
  );

  function handleUserSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.userName;
    onCreateAuthor(inputElement.value);
  }
}

const StyledInput = styled.input`
  border: 1px solid midnightblue;
  border-radius: 4px;
  padding: 7px;
  margin-right: 20px;
  letter-spacing: 1px;
  background-color: lightcyan;
  &::placeholder {
    font-size: 0.8rem;
  }
`;
const Label = styled.label`
  font-size: 1.2rem;
  margin: 10px;
  color: midnightblue;
`;
