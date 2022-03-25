import styled from 'styled-components';
import useSWR from 'swr';

import Entry from '../components/Entry';
import EntryForm from '../components/EntryForm';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function EntryPage({ user, color }) {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch data</h1>;

  return (
    <>
      <StyledHeader>☕ Lean Coffee Board</StyledHeader>
      <EntryList role="list">
        {entries
          ? entries.map(({ text, author, _id, color, tempId, createdAt }) => (
              <li key={_id ?? tempId}>
                <Entry
                  _id={_id}
                  text={text}
                  author={author}
                  color={color}
                  createdAt={createdAt}
                  onDelete={() => handleDelete(_id)}
                />
              </li>
            ))
          : '... loading ...'}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: user,
      color: color,
      tempId: Math.random(),
    };

    mutateEntries([...entries, newEntry], false);

    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });

    mutateEntries();
  }

  async function handleDelete(_id) {
    const filteredEntries = entries.filter(entry => entry._id !== _id);
    mutateEntries(filteredEntries, false);

    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });
    mutateEntries();
  }
}

const EntryList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 100px;
  list-style: none;
  padding: 0;
`;

const StyledHeader = styled.h1`
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(39, 50, 47, 0.25);
  margin: 0;
`;
