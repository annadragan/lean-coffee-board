import styled from 'styled-components';
import Entry from '../components/Entry';
import EntryForm from '../components/EntryForm';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function EntryPage({ user, color }) {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, {
    refreshInterval: 1000,
  });

  if (entriesError) return <h1>Sorry, could not fetch.</h1>;

  return (
    <Wrapper>
      <StyledHeader>☕ Lean Coffee Board</StyledHeader>
      <EntryList role="list">
        {entries
          ? entries.map(({ text, author, _id, color, tempId }) => (
              <li key={_id ?? tempId}>
                <Entry text={text} author={author} color={color} />
              </li>
            ))
          : '... loading ...'}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </Wrapper>
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
}

const Wrapper = styled.div``;
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
