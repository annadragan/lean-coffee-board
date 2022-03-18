import EntryPage from './pages/EntryPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserPage from './pages/UserPage';
import styled from 'styled-components';

export default function App() {
  const navigate = useNavigate();
  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={<UserPage handleCreateEntryPage={createEntryPage} />}
        />
        <Route path="/entries" element={<EntryPage />} />
      </Routes>
    </AppContainer>
  );

  function createEntryPage() {
    navigate('/entries');
  }
}

const AppContainer = styled.div``;
