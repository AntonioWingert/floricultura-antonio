import React, { useId } from 'react';
import * as S from './styles';

export type CustomInputProps = {
  label?: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label = '', helperText = '', ...props }, ref) => {
    const id = useId();
    const $hasError = !!helperText;
    return (
      <S.Container>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input id={id} ref={ref} $hasError={$hasError} {...props} />
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  },
);

export default CustomInput;
