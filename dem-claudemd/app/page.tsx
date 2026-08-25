const appName = process.env.NEXT_PUBLIC_APP_NAME;

if (!appName) {
  throw new Error(
    "A variável de ambiente NEXT_PUBLIC_APP_NAME é obrigatória. Copie .env.exemplo para .env.local e defina um valor."
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-[22rem] w-[22rem] translate-y-1/3 rounded-full bg-accent-cyan/20 blur-[120px]"
      />

      <p className="relative mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
        {appName}
      </p>
      <h1 className="relative text-4xl font-semibold text-white sm:text-6xl">
        Hello from Claude code
      </h1>
    </div>
  );
}
