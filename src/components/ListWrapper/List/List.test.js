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

describe('Verify List component', () => {
    test('It should display complete list without filtration', async () => {
        render(<List items={users} isDataFiltered={false} />);

        const listContent = await screen.findAllByTestId(listItemTestId);
        expect(listContent).toHaveLength(2);
    });

    test('It should display complete list with filtration', async () => {
        render(<List items={users} isDataFiltered={true} />);

        const listContent = await screen.findAllByTestId(listItemTestId);
        expect(listContent).toHaveLength(2);
    });

    test('It should display empty list without filtration', () => {
        render(<List items={[]} isDataFiltered={false} />);

        expect(screen.getByText(EMPTY_LIST)).toBeInTheDocument();
    });

    test('It should display empty list with filtration', () => {
        render(<List items={[]} isDataFiltered={true} />);

        expect(screen.getByText(NO_USER_FOUND)).toBeInTheDocument();
    });
});
