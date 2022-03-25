import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import EntryPage from './pages/EntryPage';
import UserPage from './pages/UserPage';

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
  height: 100vh;
  padding: 0 20px 12px;
`;
