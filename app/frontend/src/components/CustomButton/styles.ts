import tw from 'tailwind-styled-components';

import { CustomButtonProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.button<CustomButtonProps>`
${({ $variable }) => $variable && theme['background-colors'][$variable]}
${({ $size }) => $size && theme['button-sizes'][$size]}
${({ $color }) => $color && theme.colors[$color]}
rounded-xl
shadow-2xl
hover:bg-opacity-90
`;
