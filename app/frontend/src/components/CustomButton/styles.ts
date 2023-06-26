import tw from 'tailwind-styled-components';
import { CustomButtonProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.button<CustomButtonProps>`
  ${({ $variable }) => $variable && theme['background-colors'][$variable]}
  
  rounded
  p-2
`;
