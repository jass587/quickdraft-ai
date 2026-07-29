import { useState } from 'react';

import EmailInput from './EmailInput';
import ToneSelector from './ToneSelector';
import RewriteButton from './RewriteButton';
import OutputBox from './OutputBox';

import { rewriteEmail } from '../../services/api';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [tone, setTone] = useState('Professional');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRewrite = async () => {
    if (!email.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const data = await rewriteEmail(email, tone);

      setResult(data.rewritten_email);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-6">
          <EmailInput value={email} onChange={setEmail} />

          <ToneSelector value={tone} onChange={setTone} />

          <RewriteButton onClick={handleRewrite} isLoading={isLoading} />
        </div>
      </section>

      <OutputBox result={result} />
    </div>
  );
}

export default EmailForm;
