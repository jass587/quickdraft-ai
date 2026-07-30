function ComingSoonCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-md">
      {' '}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl">
        {icon}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
          Coming soon
        </span>
      </div>
      <p className="text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}

export default ComingSoonCard;
