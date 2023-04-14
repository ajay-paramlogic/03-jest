import React from "react";
import { convertCurrency } from "../utils/convertCurrency";

const CurrencyConverter = ({
  amount,
  rate,
}: {
  amount: number;
  rate: number;
}) => {
  const convertedAmount = convertCurrency(amount, rate);

  return (
    <div>
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
};

export default CurrencyConverter;
