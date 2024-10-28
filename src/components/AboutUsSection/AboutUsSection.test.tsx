import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUsSection from "./AboutUsSection";
import { vi } from "vitest";

// Mock the ImageResponsive component
vi.mock("../ImageResponsive", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

// Mock the Badge component
vi.mock("../Badge", () => ({
  default: ({
    description,
    customClass,
  }: {
    description: string;
    customClass: string;
  }) => <div className={customClass}>{description}</div>,
}));

// Mock the Figures component
vi.mock("../Figures", () => ({
  default: ({
    children,
    description,
    customClass,
  }: {
    children: React.ReactNode;
    description: React.ReactNode;
    customClass: string;
  }) => (
    <div className={customClass}>
      <div>{description}</div>
      {children}
    </div>
  ),
}));

describe("AboutUsSection", () => {
  it("renders the ImageResponsive component with correct alt text", () => {
    render(<AboutUsSection />);
    const imageElement = screen.getByAltText("About Us Banner");
    expect(imageElement).toBeInTheDocument();
  });

  it("renders the Figures component with correct values", () => {
    render(<AboutUsSection />);
    const dedicatedDoctorsElement = screen.getByText(/Dedicated Doctors/i);
    const hoursOfConsultationsElement = screen.getByText(
      /Hours of Patient Consultations/i
    );
    const doctorsValueElement = screen.getByText("40K+");
    const consultationsValueElement = screen.getByText("10K+");

    expect(dedicatedDoctorsElement).toBeInTheDocument();
    expect(hoursOfConsultationsElement).toBeInTheDocument();
    expect(doctorsValueElement).toBeInTheDocument();
    expect(consultationsValueElement).toBeInTheDocument();
  });
});
