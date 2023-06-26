import tw from 'tailwind-styled-components';

import { TitleProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.h1<TitleProps>`
${({ $color }) => ($color ? theme.colors[$color] : theme.colors.primary)}
${({ $size }) => ($size ? theme['text-sizes'][$size] : theme['text-sizes'].md)}

`;
