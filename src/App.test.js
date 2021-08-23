import  {render, screen } from '@testing-library/react';
import App from './App';

test('Renders App component page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add a person/);
  expect(linkElement).toBeInTheDocument();
});
