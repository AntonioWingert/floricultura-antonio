import * as S from './styles';

import CustomTitle from '../CustomTitle';

export default function Header() {
  return (
    <S.Container>
      <CustomTitle $color="dark" $size="xxl">
        Olá mundo
      </CustomTitle>
    </S.Container>
  );
}
