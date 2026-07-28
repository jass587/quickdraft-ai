import CopyButton from './CopyButton';

function OutputBox({ result = '' }) {
  const hasResult = Boolean(result.trim());

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Rewritten email
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your AI-generated email will appear below.
          </p>
        </div>

        {hasResult && <CopyButton text={result} />}
      </div>

      <div className="min-h-56 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {hasResult ? (
          <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
            {result}
          </p>
        ) : (
          <div className="flex min-h-44 flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
              ✨
            </div>

            <p className="font-medium text-slate-700">
              Your rewritten email will appear here
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              Enter your email, choose a tone, and click Rewrite Email to
              generate a polished version.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default OutputBox;
