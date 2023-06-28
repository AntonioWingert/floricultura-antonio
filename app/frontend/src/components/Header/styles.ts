import theme from '../../styles/theme';
import tw from 'tailwind-styled-components';

export const Container = tw.header`
hidden
sm:flex
sm:w-screen
sm:justify-between
sm:items-center
sm:h-28
sm:${() => theme['padding-sizes'].xxxl}
sm:${() => theme['background-colors'].primary}

`;
