import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ProductDetails from "../components/ProductDetails";  

const mockProduct = {
    cpu: "i9",
    ram: ["16GB", "32GB"],
  };

describe("<ProductDetails />", () => {
  it("renders without crashing", () => {
    render(<ProductDetails product={mockProduct} />);
  });

  it("renders all product details", () => {
    render(<ProductDetails product={mockProduct} />);
    
    expect(screen.getByText("CPU")).toBeInTheDocument();
    expect(screen.getByText("i9")).toBeInTheDocument();
    expect(screen.getByText("RAM")).toBeInTheDocument();
    expect(screen.getByText("16GB, 32GB")).toBeInTheDocument();
  });

  it("renders 'View Full Details' button", () => {
    render(<ProductDetails product={mockProduct} />);
    expect(screen.getByText("View Full Details")).toBeInTheDocument();
  });
});
