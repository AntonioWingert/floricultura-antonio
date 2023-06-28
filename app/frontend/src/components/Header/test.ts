import { render, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(Header({ children: 'Header' }));
    expect(screen.getByRole('heading', { name: /Header/i })).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});
