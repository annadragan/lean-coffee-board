import EntryPage from './pages/EntryPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserPage from './pages/UserPage';
import styled from 'styled-components';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<UserPage onCreateAuthor={createAuthor} />} />
        <Route path="/entries" element={<EntryPage user={user} />} />
      </Routes>
    </AppContainer>
  );

  function createAuthor(author) {
    setUser(author);
    navigate('/entries');
  }
}

const AppContainer = styled.div``;
