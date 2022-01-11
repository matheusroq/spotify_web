import React, { useContext, useEffect, useState } from 'react';
import { AccessTokenContext } from '../../context/AcessTokenContext';
import { useAuth } from '../../hooks/useAuth';
import axios from '../../utils/axios';
import { Container } from './styles';

export const SearchInput = () => {
  const [search, setSearch] = useState('');
  const code = useContext(AccessTokenContext);
  function handleSearch() {
    console.log(code);
    console.log(search);
    axios
      .get(`/search?accessToken=${code}&searchTerm=${search}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleSearch();
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [search]);
  return (
    <Container>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Procure..."
      />
    </Container>
  );
};
