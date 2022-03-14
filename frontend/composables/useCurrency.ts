import currency from "currency.js";

export const useCurrency = (value) => {
  return currency(value, { symbol: "£" }).format();
};
