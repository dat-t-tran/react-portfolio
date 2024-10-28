import { render } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });

  it("should render the Router component", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );

    expect(getByText(/patients have trusted us/i)).toBeInTheDocument();
  });
});
