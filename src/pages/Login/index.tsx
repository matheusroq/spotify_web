import React from 'react';
import { LoginCard } from '../../components/LoginCard';
import * as Style from './styles';
export const Login = (): JSX.Element => {
  return (
    <Style.Container>
      <Style.LoginHeader>
        <strong> spotify web app</strong>
      </Style.LoginHeader>

      <Style.LoginBoxContainer>
        <LoginCard />
      </Style.LoginBoxContainer>
    </Style.Container>
  );
};
