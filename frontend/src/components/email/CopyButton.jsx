import { useState } from 'react';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      className="
        rounded-lg border border-slate-200
        bg-white px-3 py-2
        text-sm font-medium text-slate-600
        shadow-sm
        transition-all duration-200
        hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900
        active:scale-95
        disabled:cursor-not-allowed disabled:opacity-50
      "
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default CopyButton;
