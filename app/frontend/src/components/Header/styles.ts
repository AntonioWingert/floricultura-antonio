import theme from '../../styles/theme';
import tw from 'tailwind-styled-components';

export const Container = tw.header`
  w-screen
  flex
  flex-col
  justify-center
  items-start
  ${() => theme['padding-sizes'].xxxl}
  h-28
  ${() => theme['background-colors'].primary}
  `;
