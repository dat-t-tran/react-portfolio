import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the HeroSection component", () => {
    render(<HeroSection />);

    // Check if the badge is rendered
    expect(
      screen.getByText(/Rated #1 choice for healthcare appointments by users/i)
    ).toBeInTheDocument();

    // Check if the headline is rendered
    expect(
      screen.getByText((_, element) => {
        const hasText = (node: Node) =>
          node.textContent === "Connecting You to Better Health";
        const nodeHasText = element ? hasText(element) : false;
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();

    // Check if the subheadline is rendered
    expect(
      screen.getByText((_, element) => {
        const hasText = (node: Node) =>
          node.textContent ===
          "We're here to link you directly to improved health outcomes, effortlessly connecting you with the care you need.";
        const nodeHasText = element ? hasText(element) : false;
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();

    // Check if the figures are rendered
    expect(screen.getByText(/10K+/i)).toBeInTheDocument();
    expect(screen.getByText(/Hours Of Patient Meetings/i)).toBeInTheDocument();
    expect(screen.getByText(/2.650+/i)).toBeInTheDocument();
    expect(screen.getByText(/patients have trusted us/i)).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(
      screen.getByRole("button", { name: /Book Consultation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Learn More/i })
    ).toBeInTheDocument();
  });

  it("handles Book Consultation button click", () => {
    render(<HeroSection />);

    const bookConsultationButton = screen.getByRole("button", {
      name: /Book Consultation/i,
    });
    fireEvent.click(bookConsultationButton);
  });

  it("handles Learn More button click", () => {
    render(<HeroSection />);

    const learnMoreButton = screen.getByRole("button", { name: /Learn More/i });
    fireEvent.click(learnMoreButton);
  });
});
