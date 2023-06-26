import React, { useId } from 'react';
import * as S from './styles';

export type CustomInputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// export default function CustomInput({ label, ...props }: CustomInputProps) {
//   const id = useId();
//   return (
//     <S.Container>
//       {label && <S.Label htmlFor={id}>{label}</S.Label>}
//       <S.Input {...props} id={id} />
//     </S.Container>
//   );
// }

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, ...props }, ref) => {
    const id = useId();
    return (
      <S.Container>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input {...props} id={id} ref={ref} />
      </S.Container>
    );
  },
);

export default CustomInput;
