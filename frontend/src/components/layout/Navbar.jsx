function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span>✨</span>
          QuickDraft AI
        </a>

        <a
          href="#"
          className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Navbar;
