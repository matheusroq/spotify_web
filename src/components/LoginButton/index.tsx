import React from 'react';
import * as Style from './styles';
import { FaSpotify } from 'react-icons/fa';

export const LoginButton = (): JSX.Element => {
  return (
    <Style.Container>
      <Style.LoginLink href="http://localhost:8080/login">
        Login With Spotify
        <FaSpotify size={24} />
      </Style.LoginLink>
    </Style.Container>
  );
};
