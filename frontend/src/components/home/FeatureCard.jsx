function FeatureCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {' '}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
        {icon}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
          Available
        </span>
      </div>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
