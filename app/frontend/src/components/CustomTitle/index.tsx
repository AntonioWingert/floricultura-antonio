import React from 'react';

import * as S from './styles';

export type TitleProps = {
  children: React.ReactNode;
  $size?: 'sm' | 'md' | 'lg';
  $color?: 'primary' | 'secondary' | 'danger';
  $as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function CustomTitle({
  children,
  $size = 'md',
  $color = 'primary',
  $as = 'h1',
}: TitleProps) {
  return (
    <S.Container $color={$color} $size={$size} $as={$as}>
      {children}
    </S.Container>
  );
}
