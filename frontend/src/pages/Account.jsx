import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getCurrentUser } from '../services/api';
import { removeToken } from '../utils/auth';

function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        removeToken();
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    loadAccount();
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="text-sm text-slate-500">Loading your account...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            ← Back to QuickDraft
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your QuickDraft AI account.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email
              </p>

              <p className="mt-2 text-base font-medium text-slate-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Account status
              </p>

              <div className="mt-2">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    user.is_active
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {user.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-600"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Account;
