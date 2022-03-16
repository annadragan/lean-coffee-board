import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly.js';

export default function EntryForm({ onSubmit }) {
  return (
    <FormWrapper onSubmit={handleSubmit} aria-labelledby="entry-form-name">
      <Label htmlFor="text">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>{' '}
      </Label>
      <StyledInput
        name="text"
        id="text"
        placeholder="Just some text ..."
        autoComplete="off"
        type="text"
      ></StyledInput>
      <StyledButton id="entry-form-name">
        {' '}
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <div aria-hidden="true">+</div>
      </StyledButton>
    </FormWrapper>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.text;
    onSubmit(inputElement.value);
    form.reset();
  }
}

const FormWrapper = styled.form`
  background-color: mistyrose;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  border: 1px solid midnightblue;
  border-radius: 4px;
  padding: 7px;
  width: 100%;
  margin-right: 20px;
  letter-spacing: 1px;
  background-color: lightcyan;
  &::placeholder {
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid midnightblue;
  padding: 5px;
  border-radius: 999px;
  background-color: rosybrown;
  color: azure;
  font-size: 0.9rem;
  line-height: 0;
  width: 28px;
  height: 28px;
  div {
    margin-top: -1px;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: midnightblue;
`;
