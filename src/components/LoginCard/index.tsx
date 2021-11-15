import React from 'react';
import * as Style from './styles';

import { LoginButton } from '../LoginButton';

export const LoginCard = (): JSX.Element => {
  return (
    <Style.Container>
      <LoginButton />
    </Style.Container>
  );
};
