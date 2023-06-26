import { render, screen } from '@testing-library/react';
import CustomButton from '.';

describe('<CustomButton />', () => {
  it('should render the button with all props passed', () => {
    const { container } = render(
      CustomButton({ children: 'Test', $variable: 'primary' }),
    );
    expect(screen.getByRole('button', { name: /Test/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with default props', () => {
    const { container } = render(CustomButton({ children: 'Test' }));
    expect(screen.getByRole('button', { name: /Test/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
