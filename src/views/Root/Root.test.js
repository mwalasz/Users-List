import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { DEFAULT_TITLE, SEARCH_PLACEHOLDER } from '../../utils/texts';
import Root from './Root';

const users = [
    {
        id: 0,
        name: 'Jan Kowalski',
        username: 'jkowalski',
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

describe('Check main page rendering', () => {
    test('Display Title', async () => {
        await act(async () => {
            render(<Root />);
        });
        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });

    test('Display Search', async () => {
        await act(async () => {
            render(<Root />);
        });
        expect(
            screen.getByPlaceholderText(SEARCH_PLACEHOLDER)
        ).toBeInTheDocument();
    });

    test('Display List', async () => {
        await act(async () => {
            render(<Root />);
        });
        expect(await screen.findByText('Jan Kowalski')).toBeInTheDocument();
    });
});
