import { render, screen } from '@testing-library/react';
import { DEFAULT_TITLE } from '../../utils/texts';
import Title from './Title';

describe('Verfify Title component', () => {
    test('It should display default title', () => {
        render(<Title />);

        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });

    test('It should display custom title', () => {
        const text = 'This is custom title';
        render(<Title text={text} />);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('It should display default title when no custom one is provided', () => {
        render(<Title text={''} />);

        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });
});
