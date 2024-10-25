import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
    it('renders the HeroSection component', () => {
        render(<HeroSection />);
        
        // Check if the badge is rendered
        expect(screen.getByText(/Rated #1 choice for healthcare appointments by users/i)).toBeInTheDocument();
        
        // Check if the headline is rendered
        expect(screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === 'Connecting You to Better Health';
            const nodeHasText = hasText(element);
            const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
            return nodeHasText && childrenDontHaveText;
        })).toBeInTheDocument();
        
        // Check if the subheadline is rendered
        expect(screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === "We're here to link you directly to improved health outcomes, effortlessly connecting you with the care you need.";
            const nodeHasText = hasText(element);
            const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
            return nodeHasText && childrenDontHaveText;
        })).toBeInTheDocument();
        
        // Check if the figures are rendered
        expect(screen.getByText(/10K+/i)).toBeInTheDocument();
        expect(screen.getByText(/Hours Of Patient Meetings/i)).toBeInTheDocument();
        expect(screen.getByText(/2.650+/i)).toBeInTheDocument();
        expect(screen.getByText(/patients have trusted us/i)).toBeInTheDocument();
        
        // Check if the buttons are rendered
        expect(screen.getByRole('button', { name: /Book Consultation/i })).toBeInTheDocument();
    });

    it('handles Book Consultation button click', () => {
        render(<HeroSection />);
        
        const bookConsultationButton = screen.getByRole('button', { name: /Book Consultation/i });
        fireEvent.click(bookConsultationButton);
        
        // Add your assertion for the book consultation logic here
        // For example, you can check if a function was called or a state was updated
    });

    it('handles Learn More button click', () => {
        render(<HeroSection />);
        
        const learnMoreButton = screen.getByRole('button', { name: /Learn More/i });
        fireEvent.click(learnMoreButton);
        
        // Add your assertion for the learn more logic here
        // For example, you can check if a function was called or a state was updated
    });
});