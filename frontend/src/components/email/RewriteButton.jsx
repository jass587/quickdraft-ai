import LoadingSpinner from '../common/LoadingSpinner';

function RewriteButton({ onClick, isLoading = false, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading || disabled}
      className="
        flex w-full items-center justify-center gap-2
        rounded-xl bg-indigo-600 px-5 py-3.5
        text-sm font-semibold text-white
        shadow-sm
        transition-all duration-200
        hover:bg-indigo-700 hover:shadow-md
        active:scale-[0.99]
        focus:outline-none focus:ring-4 focus:ring-indigo-500/20
        disabled:cursor-not-allowed disabled:opacity-60
        disabled:hover:bg-indigo-600 disabled:hover:shadow-sm
        disabled:active:scale-100
        "
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
