import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Layout from './Layout';

vi.mock('../../components/Header', () => ({
    default: () => <div>Mocked Header</div>
}));
vi.mock('../../components/Footer', () => ({
    default: () => <div>Mocked Footer</div>
}));

describe('Layout', () => {
    it('renders Header, Footer, and children correctly', () => {
        const { getByText } = render(
            <Layout>
                <div>Test Child</div>
            </Layout>
        );

        expect(getByText('Mocked Header')).toBeInTheDocument();
        expect(getByText('Mocked Footer')).toBeInTheDocument();
        expect(getByText('Test Child')).toBeInTheDocument();
    });

    it('applies correct classes to the container div', () => {
        const { container } = render(
            <Layout>
                <div>Test Child</div>
            </Layout>
        );

        const divElement = container.firstChild;
        expect(divElement).toHaveClass('px-4 lg:px-[3.75rem] lg:mx-auto');
    });

    it('renders main element with correct class', () => {
        const { container } = render(
            <Layout>
                <div>Test Child</div>
            </Layout>
        );

        const mainElement = container.querySelector('main');
        expect(mainElement).toHaveClass('main');
    });
});