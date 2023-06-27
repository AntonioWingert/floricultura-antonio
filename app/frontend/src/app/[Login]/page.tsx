'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import * as S from './styles';

import CustomInput from '@/components/CustomInput';
import CustomTitle from '@/components/CustomTitle';
import CustomButton from '@/components/CustomButton';

const formData = z.object({
  email: z.string().email('Email ou Senha inválidos'),
  password: z.string().min(6, 'Email ou Senha inválidos'),
});

type Input = z.infer<typeof formData>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: 'onBlur',
    resolver: zodResolver(formData),
  });
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
          {...register('email')}
          helperText={errors.email?.message}
        />
        <CustomInput
          placeholder={`Insira sua senha:`}
          label={'Senha'}
          type="password"
          {...register('password')}
          helperText={errors.password?.message}
        />
        <CustomButton $variable="secondary" $size="lg" $color="dark">
          Entrar
        </CustomButton>
      </S.Form>
    </S.Container>
  );
}
