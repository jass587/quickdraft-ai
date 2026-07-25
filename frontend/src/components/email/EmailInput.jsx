function EmailInput({ value, onChange }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor="email" className="text-sm font-semibold text-slate-800">
          Your email
        </label>

        <span className="text-xs text-slate-400">
          {value.length} characters
        </span>
      </div>

      <textarea
        id="email"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste or write your email here..."
        rows={8}
        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
      />
    </div>
  );
}

export default EmailInput;
