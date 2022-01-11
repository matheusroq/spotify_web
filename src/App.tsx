import React from 'react';
import axios from './utils/axios';
import { useAuth } from './hooks/useAuth';
import { Login } from './pages/Login';
import { SearchInput } from './components/SearchInput';
import { AccessTokenProvider } from './context/AcessTokenContext';

function getUrl(): string {
  const code = new URLSearchParams(window.location.search).get('code');
  return typeof code === 'string' ? code : '';
}
export const App = (): JSX.Element => {
  const code = getUrl();
  const accessToken = useAuth(code);
  return (
    <AccessTokenProvider value={accessToken}>
      <div className="App">{code ? <SearchInput /> : <Login />}</div>;
    </AccessTokenProvider>
  );
};

export default App;
