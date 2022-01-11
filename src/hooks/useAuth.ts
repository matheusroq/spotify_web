import { useEffect, useState } from 'react';
import axios from '../utils/axios';

export const useAuth = (code: string): string => {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    axios
      .post('/auth', {
        code,
      })
      .then((res) => setAccessToken(res.data.access_token))
      .catch((err) => console.log(err));
  }, [code]);

  return accessToken;
};
