import { render, screen } from '@testing-library/react';
import { DEFAULT_TITLE } from '../../utils/texts';
import Title from './Title';

describe('Check title rendering', () => {
    test('Default title', () => {
        render(<Title />);
        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });

    test('Custom title', () => {
        const text = 'This is custom title';
        render(<Title text={text} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('Empty custom title', () => {
        render(<Title text={''} />);
        screen.debug();
        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });
});
