import { render, screen } from '@testing-library/react';
import user  from '@testing-library/user-event';
import { assert } from 'console';
import { act } from 'react-dom/test-utils';
import { Z_ASCII } from 'zlib';

import UserForm from './UserForm';

test('It shows two inputs and a button', () => {
    render(<UserForm onUserAdd={() => {}}/>);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument(1);
});

test('it calls onUserAdd when the form is submitted', () => {
    const cb = jest.fn();
    render(<UserForm onUserAdd={cb}/>);
    act(() => {
        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        user.type(nameInput, 'name');
        user.type(emailInput, 'email');
        const button = screen.getByRole('button');
        user.click(button);
    });
    
    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledWith({ name: 'name', email: 'email' });
});

