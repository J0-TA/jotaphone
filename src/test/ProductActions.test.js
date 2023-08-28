import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductActions from "../components/ProductActions";

describe("ProductActions Component", () => {
  const mockHandleAddToCart = jest.fn();
  const mockProduct = {
    id: "1",
    options: {
      storages: [
        { code: "128", name: "128GB" },
        { code: "256", name: "256GB" },
      ],
      colors: [
        { code: "red", name: "Red" },
        { code: "blue", name: "Blue" },
      ],
    },
  };

  it("renders without crashing", () => {
    render(
      <ProductActions
        product={mockProduct}
        handleAddToCart={mockHandleAddToCart}
      />
    );
    expect(screen.getByText("Storage")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
  });

  it('calls handleAddToCart when "Add to Cart" button is clicked', () => {
    render(
      <ProductActions
        product={mockProduct}
        handleAddToCart={mockHandleAddToCart}
      />
    );
    fireEvent.click(screen.getByText("Add to Cart"));
    expect(mockHandleAddToCart).not.toHaveBeenCalled();
  });
});
