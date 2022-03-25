import dayjs from 'dayjs';
import { BsTrashFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly.js';

export default function Entry({
  _id,
  text,
  author,
  color,
  createdAt,
  onDelete,
  onCheck,
  isChecked,
}) {
  return (
    <Card>
      <FlexBetween>
        <small>
          <AiOutlineClockCircle style={{ verticalAlign: 'bottom' }} />{' '}
          {createdAt
            ? dayjs(createdAt).format('DD.MM.YYYY HH:mm')
            : 'just created'}
        </small>
        <label htmlFor={'mark-done-' + _id}>
          <ScreenReaderOnly>Mark as done</ScreenReaderOnly>
        </label>
        <CheckboxInput>
          <input
            checked={isChecked}
            onChange={onCheck}
            id={'mark-done-' + _id}
            type="checkbox"
          />
        </CheckboxInput>
        <br />
      </FlexBetween>
      {text}
      <FlexBetween>
        <Author color={color}>({author})</Author>
        <TrashButton type="button" onClick={onDelete} />
      </FlexBetween>
    </Card>
  );
}

const Card = styled.section`
  position: relative;
  display: grid;
  align-content: space-between;
  padding: 20px;
  background-color: mistyrose;
  color: midnightblue;
  max-width: 400px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: ${props => (props.color ? props.color : '#e6a592')};
`;

const Author = styled.p`
  margin: 0;
  color: midnightblue;
  font-weight: bold;
  text-transform: uppercase;
  color: ${p => p.color ?? 'green'};
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrashButton = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>Delete</ScreenReaderOnly>
      <BsTrashFill />
    </>
  ),
}))`
  all: unset;
  background: transparent;
  width: min-content;
  padding-top: 2px;
  &:hover {
    color: crimson;
  }
  &:focus:focus-visible {
    outline: 2px dashed;
  }
`;

const CheckboxInput = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;
