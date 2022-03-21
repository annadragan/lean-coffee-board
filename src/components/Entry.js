import styled from 'styled-components';

export default function Entry({ text, author, color, date }) {
  return (
    <Card color={color}>
      {text} ({author}) {date}
    </Card>
  );
}

const Card = styled.section`
  padding: 20px;
  background-color: mistyrose;
  color: midnightblue;
  max-width: 400px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: ${props => (props.color ? props.color : '#c7939d')};
`;
