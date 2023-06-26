import theme from '../../styles/theme';
import tw from 'tailwind-styled-components';

export const Container = tw.section`
  flex
  flex-col
  items-center
  justify-center
  h-screen
  w-screen

  ${() => theme['background-colors']['light-gray']}
`;

export const Form = tw.form`
  container
  flex
  flex-col
  items-center
  justify-center
  h-4/6
  w-2/6
  gap-10
  rounded-xl
  shadow-2xl
  ${() => theme['background-colors'].primary}
`;
