export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-widest text-white/80 uppercase">
          MBA IA - FullCycle
        </span>

        <button
          type="button"
          className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/90 transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
        >
          Entrar
        </button>
      </div>
    </header>
  );
}
