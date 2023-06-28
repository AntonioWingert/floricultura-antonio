import React from 'react';
import * as S from './styles';

import CustomTitle from '../CustomTitle';
import Image from 'next/image';
import User from '../../../public/user.svg';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <S.Container>
      <CustomTitle $color="dark" $size="xxxl">
        {children}
      </CustomTitle>
      <Image src={User} alt="User Icon" className="cursor-pointer" />
    </S.Container>
  );
}
