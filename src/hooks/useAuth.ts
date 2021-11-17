import { useEffect, useState } from 'react';
import axios from '../utils/axios';
interface Props {
  code: string;
}

export const useAuth = (props: Props): string => {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    axios
      .post('/auth', {
        code: props.code,
      })
      .then((res) => setAccessToken(res.data.access_token))
      .catch((err) => console.log(err));
  }, [props.code]);

  return accessToken;
};
