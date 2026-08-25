const appName = process.env.NEXT_PUBLIC_APP_NAME;

if (!appName) {
  throw new Error(
    "A variável de ambiente NEXT_PUBLIC_APP_NAME é obrigatória. Copie .env.exemplo para .env.local e defina um valor."
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-fuchsia-600 via-purple-600 to-cyan-500 px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
        {appName}
      </p>
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg sm:text-6xl">
        Hello from Claude code
      </h1>
    </div>
  );
}
