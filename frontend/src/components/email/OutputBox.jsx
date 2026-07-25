function OutputBox() {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Rewritten email
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your polished email will appear here.
        </p>
      </div>

      <div className="min-h-52 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm leading-7 text-slate-400">
          Your rewritten email will appear here...
        </p>
      </div>
    </section>
  );
}

export default OutputBox;
