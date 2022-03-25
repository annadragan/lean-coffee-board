import styled from 'styled-components';

export default function UserPage({ onCreateAuthor }) {
  return (
    <>
      <AuthorForm onSubmit={handleUserSubmit} aria-labelledby="user-page">
        <Label htmlFor="userName">What is your name?</Label>
        <StyledInput
          name="userName"
          id="userName"
          autoComplete="off"
          placeholder="Type your name..."
          type="text"
          required
        ></StyledInput>
        <Label htmlFor="color">Choose a color:</Label>
        <StyledInput
          type="color"
          id="color"
          name="color"
          defaultValue="#D70761"
        ></StyledInput>
        <Button>Save</Button>
      </AuthorForm>
    </>
  );

  function handleUserSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.userName;
    const inputColor = form.elements.color;
    onCreateAuthor(inputElement.value, inputColor.value);
  }
}

const AuthorForm = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10px;
  border: 1px solid hotpink;
  border-radius: 5px;
  width: 50%;
  background-color: #e6a592;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
`;

const StyledInput = styled.input`
  border: 1px solid midnightblue;
  border-radius: 4px;
  padding: 3px;
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

const Button = styled.button`
  border-radius: 13px;

  background-color: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin: 20px;
  padding: 10px;
  font-weight: 100;
  letter-spacing: 10px;
  &:hover {
    transition: 0.3s all;
    transform: translateY(3px);
    background-color: green;
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;
