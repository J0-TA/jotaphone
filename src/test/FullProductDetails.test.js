import React from "react";
import { render, screen } from "@testing-library/react";
import FullProductDetails from "../components/FullProductDetails";

describe("FullProductDetails", () => {
  it("renders the product details correctly", () => {
    const mockProduct = {
      ram: "2 GB RAM",
      excludedField: "should not show",
    };

    render(<FullProductDetails product={mockProduct} />);

    const excludedElement = screen.queryByText(/excludedField/i);
    expect(excludedElement).toBeNull();

    const ramElements = screen.getAllByText(/ram/i);
    const ramElement = ramElements.find((el) =>
      el.textContent.includes("2 GB RAM")
    );
    expect(ramElement.textContent).toContain("2 GB RAM");
  });

  it("scrolls back to top when the fab button is clicked", () => {
    const mockProduct = {
      brand: "Apple",
      model: "iPhone",
      price: 999,
    };

    const scrollSpy = jest.fn();
    window.scrollTo = scrollSpy;

    render(<FullProductDetails product={mockProduct} />);

    const fabButton = screen.getByLabelText("scroll back to top");
    fabButton.click();

    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
