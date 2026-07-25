function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-slate-900">✨ QuickDraft AI</h1>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Navbar;
