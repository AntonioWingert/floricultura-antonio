import theme from '@/styles/theme';
import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-col
`;

export const Input = tw.input`
  rounded-md
  border-none
  text-left
  ${() => theme['padding-sizes'].lg}
  focus:outline-none
  shadow-2xl

`;

export const Label = tw.label`
  cursor-pointer
  mb-5
  text-lg
  font-bold
  ${() => theme.colors.dark}
`;
