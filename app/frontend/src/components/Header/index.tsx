import * as S from './styles';

import CustomTitle from '../CustomTitle';
import CustomButton from '../CustomButton';

export default function Header() {
  return (
    <S.Container>
      <CustomTitle $size="md" $as="h2" $color="danger">
        olá mundo legallllllllll
      </CustomTitle>
      <CustomButton $variable="primary">button</CustomButton>
    </S.Container>
  );
}
