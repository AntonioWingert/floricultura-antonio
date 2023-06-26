import { render, screen } from '@testing-library/react';
import CustomTitle from '.';

describe('<CustomTitle />', () => {
  it('should render the button with all props passed', () => {
    const { container } = render(
      CustomTitle({
        children: 'Test',
        $as: 'h1',
        $size: 'lg',
        $color: 'primary',
      }),
    );

    expect(screen.getByRole('heading', { name: /Test/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with default props', () => {
    const { container } = render(CustomTitle({ children: 'Test' }));

    expect(screen.getByRole('heading', { name: /Test/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
