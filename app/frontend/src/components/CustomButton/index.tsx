import React from 'react';

import * as S from './styles';

export type CustomButtonProps = {
  children: React.ReactNode;
  $variable?:
    | 'dark'
    | 'white'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'soft-pink';
  $size?: 'sm' | 'md' | 'lg';
  $color?: 'primary' | 'secondary' | 'error' | 'dark' | 'white';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  $variable = 'primary',
  $color = 'white',
  ...props
}: CustomButtonProps) => {
  return (
    <S.Container $variable={$variable} $color={$color} {...props}>
      {children}
    </S.Container>
  );
};

export default CustomButton;
