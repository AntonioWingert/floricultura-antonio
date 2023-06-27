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
  flex
  flex-col
  items-center
  justify-center
  w-screen
  h-screen
  gap-10
  rounded-xl
  shadow-2xl
  ${() => theme['background-colors'].primary}
  
  sm:w-3/6
  sm:h-4/6
  
`;
