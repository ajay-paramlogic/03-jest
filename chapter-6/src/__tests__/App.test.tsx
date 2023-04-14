import { render, screen } from "@testing-library/react";
import App from "../App";
import DataList from "../components/DataList";
import CurrencyConverter from "../components/CurrencyConverter";
import * as currencyUtils from "../utils/convertCurrency";

jest.mock("../api/fetchData");
jest.mock("../utils/convertCurrency");

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("DataList", () => {
  test("DataList fetches and renders data correctly", async () => {
    render(<DataList />);

    // Check if the data is rendered correctly
    expect(await screen.findByText("Item 1")).toBeInTheDocument();
    expect(await screen.findByText("Item 2")).toBeInTheDocument();
    expect(await screen.findByText("Item 3")).toBeInTheDocument();
  });
});

describe("CurrencyConverter", () => {
  test("CurrencyConverter renders correctly", async () => {
    const mockConvertCurrency = jest.spyOn(currencyUtils, "convertCurrency");
    mockConvertCurrency.mockReturnValue(200);

    render(<CurrencyConverter amount={100} rate={2} />);

    expect(screen.getByText("Converted Amount: 200")).toBeInTheDocument();
    expect(mockConvertCurrency).toHaveBeenCalledWith(100, 2);

    // Cleanup
    mockConvertCurrency.mockRestore();
  });
});
