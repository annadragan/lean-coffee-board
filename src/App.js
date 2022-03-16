import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';

export default function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();

    async function getEntries() {
      const response = await fetch('/api/entries');
      const entries = await response.json();
      setEntries(entries);
    }
  }, []);

  return (
    <>
      <StyledHeader>☕ Lean Coffee Board</StyledHeader>
      <EntryList role="list">
        {entries.map(({ text, author, _id }) => (
          <li key={_id}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </>
  );
  async function handleNewEntry(text) {
    const response = await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        author: 'Anonymous',
      }),
    });

    const newEntry = await response.json();
    setEntries([...entries, newEntry]);
  }
}

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
const StyledHeader = styled.h1`
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
  margin: 0;
`;
