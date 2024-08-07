import { render, waitFor, screen } from '@testing-library/react';
import CardList from '../CardList';
import CardControl from '../CardControl';
import { Duty } from 'commons/Types';

jest.mock('../CardControl');

const mockResponse: Duty[] = [
    {
        "id": "9a61bfc0-52ea-11ef-9021-f36289b64a96",
        "name": "Duty 3: Documentation including README.md. How to run in production. Repo structure...etc.",
        "deleted": false,
        "created_at": 0,
        "modified_at": 0
    },
    {
        "id": "b7ee3990-53a0-11ef-9398-1f7a3ab5f60a",
        "name": "Error logging is still missing.",
        "deleted": false,
        "created_at": 0,
        "modified_at": 0
    },
    {
        "id": "662a7c66-5433-11ef-8cea-afe5b050ec1c",
        "name": "Still has to write test, comments and provide deployment documentation.",
        "deleted": false,
        "created_at": 0,
        "modified_at": 0
    }
];

test('CardList content to render correctly', async () => {
    render(<CardList cardData={mockResponse} goToEditor={() => {}} deleteCard={() => {}} />)
    const targetElement = await waitFor(() => screen.getByText(/Error logging/i));
    expect(targetElement).toBeInTheDocument(); 
});

test('CardList has 3 items', async () => {
    render(<CardList cardData={mockResponse} goToEditor={() => {}} deleteCard={() => {}} />)
    expect(CardControl).toHaveBeenCalledTimes(3);
});