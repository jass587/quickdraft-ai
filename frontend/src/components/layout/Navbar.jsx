import { Link, useNavigate } from 'react-router-dom';

import { isAuthenticated, removeToken } from '../../utils/auth';

function Navbar() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
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
        </Link>

        <div className="flex items-center gap-4">
          {authenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}

          <a
            href="https://github.com/jass587/quickdraft-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
