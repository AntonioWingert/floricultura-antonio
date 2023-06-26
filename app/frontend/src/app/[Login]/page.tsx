'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';

import CustomInput from '@/components/CustomInput';
import CustomTitle from '@/components/CustomTitle';
import CustomButton from '@/components/CustomButton';

import { Input } from '@/types/Input';

export default function Login() {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <CustomTitle $color="dark" $size="xxxl">
          Faça seu login para acessar o sistema
        </CustomTitle>
        <CustomInput
          placeholder={`Insira seu email:`}
          label={'Email'}
          type="email"
          {...register('email', { required: true })}
        />
        <CustomInput
          placeholder={`Insira sua senha:`}
          label={'Senha'}
          type="password"
          {...register('password', { required: true })}
        />
        <CustomButton $variable="secondary" $size="lg" $color="dark">
          Entrar
        </CustomButton>
      </S.Form>
    </S.Container>
  );
}
