import EntryPage from './pages/EntryPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserPage from './pages/UserPage';
import styled from 'styled-components';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState('');
  const [userColor, setUserColor] = useState('');
  const navigate = useNavigate();
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<UserPage onCreateAuthor={createAuthor} />} />
        <Route
          path="/entries"
          element={<EntryPage user={user} color={userColor} />}
        />
      </Routes>
    </AppContainer>
  );

  function createAuthor(author, color) {
    setUser(author);
    setUserColor(color);
    navigate('/entries');
  }
}

const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  padding: 0 20px 12px;
`;
