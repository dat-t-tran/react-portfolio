import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ImageResponsive from "./ImageResponsive";
import { ImageResponsiveProps } from "./ImageResponsive.types";

describe("ImageResponsive Component", () => {
  const defaultProps: ImageResponsiveProps = {
    sources: [
      {
        id: 1,
        srcSet: "image-1x.jpg",
        media: "(max-width: 600px)",
        type: "image/jpeg",
      },
      {
        id: 2,
        srcSet: "image-2x.jpg",
        media: "(min-width: 601px)",
        type: "image/jpeg",
      },
    ],
    originSrc: "image.jpg",
    alt: "Test image",
    className: "test-class",
    lazyLoad: true,
  };

  it("should render correctly with given props", () => {
    const { container } = render(<ImageResponsive {...defaultProps} />);
    expect(container.querySelector("picture")).toBeInTheDocument();
    expect(container.querySelectorAll("source")).toHaveLength(
      defaultProps.sources.length
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      defaultProps.originSrc
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      defaultProps.alt
    );
    expect(container.querySelector("img")).toHaveAttribute(
      "class",
      defaultProps.className
    );
    expect(container.querySelector("img")).toHaveAttribute("loading", "lazy");
  });

  it("should render without lazy loading when lazyLoad is false", () => {
    const props = { ...defaultProps, lazyLoad: false };
    const { container } = render(<ImageResponsive {...props} />);
    expect(container.querySelector("img")).not.toHaveAttribute(
      "loading",
      "lazy"
    );
  });
});
