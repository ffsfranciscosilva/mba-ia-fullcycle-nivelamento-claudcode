import { describe, expect, it } from "vitest";
import { formatPrice } from "./format";

describe("formatPrice", () => {
  it("formats a positive amount in BRL using comma as decimal separator", () => {
    expect(formatPrice(123456, "BRL")).toMatch(/^R\$\s?1\.234,56$/);
  });

  it("formats a positive amount in USD using dot as decimal separator", () => {
    expect(formatPrice(123456, "USD")).toBe("$1,234.56");
  });

  it("formats zero cents in BRL", () => {
    expect(formatPrice(0, "BRL")).toMatch(/^R\$\s?0,00$/);
  });

  it("formats zero cents in USD", () => {
    expect(formatPrice(0, "USD")).toBe("$0.00");
  });

  it("formats a negative amount in BRL with a leading minus sign", () => {
    expect(formatPrice(-500, "BRL")).toMatch(/^-R\$\s?5,00$/);
  });

  it("formats a negative amount in USD with a leading minus sign", () => {
    expect(formatPrice(-550, "USD")).toBe("-$5.50");
  });

  it("converts cents to the correct decimal unit rather than hardcoding output", () => {
    expect(formatPrice(199, "USD")).toBe("$1.99");
    expect(formatPrice(100000, "USD")).toBe("$1,000.00");
  });
});
