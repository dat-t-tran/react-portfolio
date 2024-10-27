import { render } from '@testing-library/react';
import Figures from './Figures';
import { describe, it, expect } from 'vitest';

describe('Figures Component', () => {
    it('renders correctly with required props', () => {
        const { container } = render(
            <Figures gap="gap-4" description="Test Description">
                <div>Child Element</div>
            </Figures>
        );
        expect(container).toMatchSnapshot();
    });

    it('applies customClass correctly', () => {
        const { container } = render(
            <Figures gap="gap-4" description="Test Description" customClass="custom-class">
                <div>Child Element</div>
            </Figures>
        );
        expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies direction correctly', () => {
        const { container } = render(
            <Figures gap="gap-4" description="Test Description" direction="flex-row">
                <div>Child Element</div>
            </Figures>
        );
        expect(container.firstChild).toHaveClass('flex-row');
    });

    it('renders children correctly', () => {
        const { getByText } = render(
            <Figures gap="gap-4" description="Test Description">
                <div>Child Element</div>
            </Figures>
        );
        expect(getByText('Child Element')).toBeInTheDocument();
    });

    it('renders description correctly', () => {
        const { getByText } = render(
            <Figures gap="gap-4" description="Test Description">
                <div>Child Element</div>
            </Figures>
        );
        expect(getByText('Test Description')).toBeInTheDocument();
    });
});