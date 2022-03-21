import styled from 'styled-components';

export default function UserPage({ onCreateAuthor }) {
  return (
    <>
      <Wrapper>
        <form onSubmit={handleUserSubmit} aria-labelledby="user-page">
          <Label htmlFor="userName">What is your name?</Label>
          <StyledInput
            name="userName"
            id="userName"
            autoComplete="off"
            placeholder="your name..."
            type="text"
            required
          ></StyledInput>
          <Label htmlFor="color">Choose a color:</Label>
          <StyledInput
            type="color"
            name="color"
            defaultValue="#D70761"
          ></StyledInput>
          <Button>Save</Button>
        </form>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border: 1px solid hotpink;
  border-radius: 5px;
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
  border: 1px solid #cf8996;
  padding: 7px;
  background-color: #d70671;
  color: white;
  border-radius: 999px;
  margin: 7px;
`;
