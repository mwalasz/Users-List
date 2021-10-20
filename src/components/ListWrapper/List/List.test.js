import { render, screen, cleanup } from '@testing-library/react';
import { NO_USER_FOUND, EMPTY_LIST } from '../../../utils/texts';
import List from './List';

const users = [
    {
        id: 0,
        name: 'Jan Kowalski',
        username: 'jkowalski',
    },
    {
        id: 1,
        name: 'Adam Nowak',
        username: 'anowak',
    },
];

const listItemTestId = 'item';

afterAll(cleanup);

describe('Check title rendering', () => {
    test('Display list with users with no filtration', async () => {
        render(<List items={users} isDataFiltered={false} />);

        const listContent = await screen.findAllByTestId(listItemTestId);
        expect(listContent).toHaveLength(2);
    });

    test('Display list with users with filtration', async () => {
        render(<List items={users} isDataFiltered={true} />);

        const listContent = await screen.findAllByTestId(listItemTestId);
        expect(listContent).toHaveLength(2);
    });

    test('Display empty list with no filtration', () => {
        render(<List items={[]} isDataFiltered={false} />);
        expect(screen.getByText(EMPTY_LIST)).toBeInTheDocument();
    });

    test('Display empty list with filtration', () => {
        render(<List items={[]} isDataFiltered={true} />);
        expect(screen.getByText(NO_USER_FOUND)).toBeInTheDocument();
    });
});
