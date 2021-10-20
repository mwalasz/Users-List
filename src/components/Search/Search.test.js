import { render, screen, cleanup } from '@testing-library/react';
import { SEARCH_PLACEHOLDER } from '../../utils/texts';
import Search from './Search';
import userEvent from '@testing-library/user-event';

afterAll(cleanup);

const setup = (text, onTextChange) => {
    const utils = render(<Search text={text} onTextChange={onTextChange} />);
    const search = utils.getByTestId('search');
    return {
        search,
        ...utils,
    };
};

describe('Verify Search component', () => {
    test('It should display placeholder, when there is no value', () => {
        const searchValue = '';
        const onChange = () => {};
        const { search } = setup(searchValue, onChange);

        expect(search).toHaveValue('');
        expect(
            screen.getByPlaceholderText(SEARCH_PLACEHOLDER)
        ).toBeInTheDocument();
    });

    test('It should display entered value', () => {
        const searchValue = 'Where is Nemo';
        const onChange = () => {};
        const { search } = setup(searchValue, onChange);

        expect(search).toHaveValue(searchValue);
    });

    test('It should fire onTextChange function when there is some input provided', () => {
        const input = 'Text entered by user.';
        const onChange = jest.fn();
        const { search } = setup(input, onChange);

        userEvent.type(search, input);
        expect(onChange).toBeCalledTimes(input.length);
    });
});
