import theme from '@/styles/theme';
import tw from 'tailwind-styled-components';

type InputProps = {
  $hasError: boolean;
};

export const Container = tw.div`
  flex
  flex-col
`;

export const Input = tw.input<InputProps>`
  rounded-md
  text-left
  focus:outline-none
  shadow-2xl
  ${() => theme['padding-sizes'].lg}

  ${({ $hasError }) =>
    $hasError ? `border-2 border-red-500` : `border-none`})}
`;

export const Label = tw.label`
  cursor-pointer
  mb-5
  text-lg
  font-bold
  ${() => theme.colors.dark}
`;

export const HelperText = tw.span`
  ${() => theme.colors.error}
  mt-4
`;
