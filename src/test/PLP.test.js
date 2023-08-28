import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PLP from "../views/PLP"; 

const axios = require("axios");

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: mockData }))
}));

const mockData = [
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  },
  {
    id: "cGjFJlmqNPIwU59AOcY8H",
    brand: "Acer",
    model: "Liquid Z6 Plus",
    price: "250",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg",
  },
];

describe("PLP Component Tests", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockData });
  });

  it("should render PLP component", async () => {
    await act(async () => {
      render(<PLP />);
    });

    expect(screen.getByTestId("plp-container")).toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });
});
