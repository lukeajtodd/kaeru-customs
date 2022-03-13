import currency from "currency.js";

export const useCurrency = (value) => {
  return useState("currency", () => currency(value, { symbol: "£" }).format());
};
