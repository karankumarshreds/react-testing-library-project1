import { render, within, screen } from "@testing-library/react";
import UsersList from "./UserList";

const users = [
    { name: 'user1', email: 'email1' },
    { name: 'user2', email: 'email2' },
]

test('Renders correct list', () => {
    render(<UsersList users={users}/>);
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);
});