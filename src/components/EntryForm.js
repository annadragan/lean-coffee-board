import { useState } from 'react';

export default function EntryForm() {
  const [newEntry, setNewEntry] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="entry-form">Create a Form </label>
      <input
        name="entry-form"
        id="entry-form"
        placeholder="write some Text"
        onChange={event => setNewEntry(event.target.value)}
        value={newEntry}
      ></input>
      <button>Submit</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newEntry);
    setNewEntry('');
  }
}
