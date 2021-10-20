import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { EMPTY_LIST } from '../../utils/texts';
import ListWrapper from './ListWrapper';

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

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(users),
    });
});

afterEach(() => {
    jest.restoreAllMocks();
});

afterAll(cleanup);

describe('Tests of list filtration', () => {
    test('It should find all users', async () => {
        render(<ListWrapper searchText={''} />);

        const listContent = await screen.findAllByTestId('item');
        expect(listContent).toHaveLength(2);
        expect(screen.getByText('Jan Kowalski')).toBeInTheDocument();
        expect(screen.getByText('Adam Nowak')).toBeInTheDocument();
    });

    test('It should find one user', async () => {
        render(<ListWrapper searchText={'adam'} />);

        const listContent = await screen.findAllByTestId('item');
        expect(listContent).toHaveLength(1);
        expect(screen.getByText('Adam Nowak')).toBeInTheDocument();
    });

    test('It should find one user with not matching mixed case', async () => {
        render(<ListWrapper searchText={' KoWaLs'} />);

        const listContent = await screen.findAllByTestId('item');
        expect(listContent).toHaveLength(1);
        expect(screen.getByText('Jan Kowalski')).toBeInTheDocument();
    });

    test('It should find no users', async () => {
        await act(async () => {
            render(<ListWrapper searchText={'abcdef'} />);
        });

        const listContent = screen.queryAllByTestId('item');
        expect(listContent).toHaveLength(0);
    });

    test('It should handle connection error', async () => {
        const fetchError = jest
            .spyOn(global, 'fetch')
            .mockRejectedValueOnce('Timeout error');
        const windowAlert = jest
            .spyOn(window, 'alert')
            .mockImplementationOnce(jest.fn());

        render(<ListWrapper searchText={''} />);

        expect(await screen.findByText(EMPTY_LIST)).toBeInTheDocument();
        expect(fetchError).toBeCalledTimes(1);
        expect(windowAlert).toBeCalledTimes(1);
    });
});
