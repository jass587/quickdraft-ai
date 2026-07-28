function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      role="alert"
      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-red-500" aria-hidden="true">
          ⚠
        </span>

        <div>
          <p className="text-sm font-semibold text-red-800">
            Something went wrong
          </p>

          <p className="mt-1 text-sm text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
