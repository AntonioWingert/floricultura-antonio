import React from 'react';

import * as S from './styles';

export type CustomButtonProps = {
  children: React.ReactNode;
  $variable?: 'danger' | 'success' | 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  $variable = 'primary',
  ...props
}: CustomButtonProps) => {
  return (
    <S.Container $variable={$variable} {...props}>
      {children}
    </S.Container>
  );
};

export default CustomButton;
