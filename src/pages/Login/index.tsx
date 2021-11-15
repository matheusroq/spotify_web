import React from 'react';
import { LoginCard } from '../../components/LoginCard';
import * as Style from './styles';
export const Login = (): JSX.Element => {
  return (
    <Style.Container>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        laudantium dolorem ut architecto reiciendis commodi odit delectus
        aliquid laborum incidunt perferendis ullam soluta omnis velit, ad
        obcaecati repellat quasi illo!
      </div>
      <Style.LoginBoxContainer>
        <LoginCard />
      </Style.LoginBoxContainer>
    </Style.Container>
  );
};
