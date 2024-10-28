// src/components/Header/Header.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from 'vitest';
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

// Mock the NavigationList and SideBar components
vi.mock('../NavigationList', () => ({
    default: () => <div>Mocked NavigationList</div>
}));
vi.mock('../SideBar', () => ({
    default: ({ menuStatus, toggleMenu }: { menuStatus: boolean; toggleMenu: () => void }) => (
        <div>
            Mocked SideBar <button onClick={toggleMenu}>Toggle Menu</button>
            <div>{menuStatus ? 'Menu Open' : 'Menu Closed'}</div>
        </div>
    )
}));

describe('Header Component', () => {
    it('renders logo and title', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const logo = screen.getByAltText("MedEase Logo");
        const title = screen.getByText("MedEase");

        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    it('renders navigation list in desktop view', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getByText('Mocked NavigationList')).toBeInTheDocument();
    });

    it('renders register button in desktop view', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const registerButton = screen.getByRole("button", { name: /create account/i });

        expect(registerButton).toBeInTheDocument();
    });

    it('renders mobile menu button in mobile view', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const mobileMenuButton = screen.getByRole("button", { name: /mobile menu/i });

        expect(mobileMenuButton).toBeInTheDocument();
    });

    it('renders navigation list in mobile view when menu is open', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const mobileMenuButton = screen.getByRole("button", { name: /mobile menu/i });

        // Open the mobile menu
        fireEvent.click(mobileMenuButton);
        expect(screen.getByText('Mocked NavigationList')).toBeInTheDocument();
    });
});