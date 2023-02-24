import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from './App';

test('it can recieve a new user and show it on a list', () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: 'Name' });
  const emailInput = screen.getByRole('textbox', { name: 'Email' });
  const button = screen.getByRole('button');
  act(() => {
    user.type(emailInput, 'email');
    user.type(nameInput, 'name');
    user.click(button);
  });

  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(1);
});
