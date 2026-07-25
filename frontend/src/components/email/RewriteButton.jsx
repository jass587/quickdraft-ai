import LoadingSpinner from '../common/LoadingSpinner';

function RewriteButton({ isLoading = false }) {
  return (
    <button
      type="button"
      disabled={isLoading}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          Rewriting...
        </>
      ) : (
        <>
          <span aria-hidden="true">✨</span>
          Rewrite Email
        </>
      )}
    </button>
  );
}

export default RewriteButton;
