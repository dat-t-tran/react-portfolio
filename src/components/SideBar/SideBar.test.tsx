import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SideBar from './SideBar';
import { SideBarProps } from './SideBar.types';

// Mock the NavigationList component
vi.mock('../NavigationList', () => ({
    default: () => <div>Mocked NavigationList</div>
}));

describe('SideBar Component', () => {
    const defaultProps: SideBarProps = {
        menuStatus: false,
        toggleMenu: vi.fn(),
    };

    it('renders correctly with menu closed', () => {
        render(<SideBar {...defaultProps} />);
        const asideElement = screen.getByRole('complementary');
        expect(asideElement).toHaveClass('w-0');
    });

    it('renders correctly with menu open', () => {
        render(<SideBar {...defaultProps} menuStatus={true} />);
        const asideElement = screen.getByRole('complementary');
        expect(asideElement).toHaveClass('w-full');
    });

    it('renders the navigation list', () => {
        render(<SideBar {...defaultProps} />);
        expect(screen.getByText('Mocked NavigationList')).toBeInTheDocument();
    });

    it('calls toggleMenu when close button is clicked', () => {
        render(<SideBar {...defaultProps} />);
        const closeButton = screen.getByRole('button', { name: /close menu/i });
        fireEvent.click(closeButton);
        expect(defaultProps.toggleMenu).toHaveBeenCalled();
    });
});