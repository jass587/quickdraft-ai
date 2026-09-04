import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getCurrentUser, getUsage } from '../services/api';
import { removeToken } from '../utils/auth';

function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [usage, setUsage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usageError, setUsageError] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const [currentUser, usageData] = await Promise.all([
          getCurrentUser(),
          getUsage(),
        ]);

        setUser(currentUser);
        setUsage(usageData);
      } catch (error) {
        if (error?.cause?.response?.status === 401) {
          removeToken();
          navigate('/login');
          return;
        }

        setUsageError(error.message || 'Unable to load account information.');
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

        <div className="space-y-5">
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

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Credits
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Monthly usage
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your current monthly AI rewrite allowance.
                </p>
              </div>

              {usage && (
                <div className="rounded-xl bg-indigo-50 px-4 py-2 text-right">
                  <p className="text-xs font-medium text-indigo-600">
                    Remaining
                  </p>

                  <p className="text-2xl font-bold text-indigo-700">
                    {usage.credits_remaining}
                  </p>
                </div>
              )}
            </div>

            {usageError ? (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {usageError}
              </div>
            ) : usage ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Monthly credits
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {usage.monthly_credits}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">Used</p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {usage.credits_used}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Remaining
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {usage.credits_remaining}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Account;
