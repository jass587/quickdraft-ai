function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
          aria-label="QuickDraft AI home"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-base text-white shadow-sm"
            aria-hidden="true"
          >
            ✨
          </span>

          <span>
            QuickDraft <span className="text-indigo-600">AI</span>
          </span>
        </a>

        <a
          href="https://github.com/jass587/quickdraft-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Navbar;
