const tones = ['Professional', 'Friendly', 'Formal', 'Confident', 'Polite'];

function ToneSelector({ value, onChange }) {
  return (
    <div>
      <label
        htmlFor="tone"
        className="mb-2 block text-sm font-semibold text-slate-800"
      >
        Tone
      </label>

      <select
        id="tone"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
      >
        {tones.map((tone) => (
          <option key={tone} value={tone}>
            {tone}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ToneSelector;
