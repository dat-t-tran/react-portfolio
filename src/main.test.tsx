import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Mock the necessary modules
vi.mock('react-dom/client', () => ({
    createRoot: vi.fn(),
}));

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal() as Record<string, unknown>;
    return {
        ...actual,
        BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
        Outlet: () => <div>Mocked Outlet</div>, // Mock the Outlet component
    };
});

describe('main.tsx', () => {
    beforeEach(() => {
        // Clean up the document body before each test
        document.body.innerHTML = '';
    });

    it('should render the App component inside StrictMode and BrowserRouter', async () => {
        const rootElement = document.createElement('div');
        rootElement.id = 'root';
        document.body.appendChild(rootElement);

        const mockRender = vi.fn();
        (createRoot as unknown as Mock).mockReturnValue({ render: mockRender });

        // Dynamically import the main file after setting up the mocks
        await import('./main');

        expect(createRoot).toHaveBeenCalledWith(rootElement);
        expect(mockRender).toHaveBeenCalledWith(
            <StrictMode>
                <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
                    <App />
                </BrowserRouter>
            </StrictMode>
        );

        document.body.removeChild(rootElement);
    });
});