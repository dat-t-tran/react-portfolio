import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationList from './NavigationList';
import { navigation } from './NavigationList.types';

describe('NavigationList', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <NavigationList />
            </BrowserRouter>
        );
    });

    it('renders all navigation items', () => {
        const { getAllByRole } = render(
            <BrowserRouter>
                <NavigationList />
            </BrowserRouter>
        );
        const items = getAllByRole('listitem');
        expect(items.length).toBe(navigation.length);
    });

    it('renders navigation item names correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <NavigationList />
            </BrowserRouter>
        );
        navigation.forEach(item => {
            expect(getByText(item.name)).toBeInTheDocument();
        });
    });

    it('applies correct class names based on active state', () => {
        const { getByText } = render(
            <BrowserRouter>
                <NavigationList />
            </BrowserRouter>
        );
        navigation.forEach(item => {
            const linkElement = getByText(item.name);
            expect(linkElement).toHaveClass('font-normal text-sm lg:text-xl truncate');
        });
    });
});