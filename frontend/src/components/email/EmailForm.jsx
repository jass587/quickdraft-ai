import { useState } from 'react';

import EmailInput from './EmailInput';
import ToneSelector from './ToneSelector';
import RewriteButton from './RewriteButton';
import ErrorMessage from '../common/ErrorMessage';
import OutputBox from './OutputBox';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [tone, setTone] = useState('Professional');
  const [error, setError] = useState('');

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-6">
          <EmailInput value={email} onChange={setEmail} />
          <ToneSelector value={tone} onChange={setTone} />
          <ErrorMessage message={error} />
          <RewriteButton />
        </div>
      </section>

      <OutputBox />
    </div>
  );
}

export default EmailForm;
