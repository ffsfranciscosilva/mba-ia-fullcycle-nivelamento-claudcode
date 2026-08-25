export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-widest text-white/80 uppercase">
          MBA IA - FullCycle
        </span>

        <button
          type="button"
          className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/30 transition-all hover:from-red-500 hover:to-rose-400 hover:shadow-red-500/40"
        >
          Entrar
        </button>
      </div>
    </header>
  );
}
