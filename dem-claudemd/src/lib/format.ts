const CURRENCY_LOCALES: Record<string, string> = {
  BRL: "pt-BR",
  USD: "en-US",
};

export function formatPrice(cents: number, currency: string): string {
  const amount = cents / 100;
  const locale = CURRENCY_LOCALES[currency] ?? "en-US";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
