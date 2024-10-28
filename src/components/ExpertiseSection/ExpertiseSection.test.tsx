import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExpertiseSection from "./ExpertiseSection";
import { expertiesData } from "../../constants";

describe("ExpertiseSection component", () => {
  it("renders without crashing", () => {
    render(<ExpertiseSection />);
  });

  it("renders the Heading component with correct text", () => {
    render(<ExpertiseSection />);
    expect(screen.getByText("Choose Doctor's")).toBeInTheDocument();
    expect(screen.getByText("Expertise")).toBeInTheDocument();
  });

  it("renders the Carousel component with correct items", () => {
    render(<ExpertiseSection />);
    expertiesData.forEach((item) => {
      expect(screen.getByText(item.body.title)).toBeInTheDocument();
    });
  });
});
