import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import EmailForm from '../components/email/EmailForm';
import Footer from '../components/layout/Footer';
import FeatureCard from '../components/home/FeatureCard';
import ComingSoonCard from '../components/home/ComingSoonCard';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <Hero />

          <div className="mt-10">
            <EmailForm />
            <section className="mx-auto mt-24 max-w-5xl">
              <div className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  More tools
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Write smarter with QuickDraft AI
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                  More AI-powered writing tools are on the way.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon="✉️"
                  title="Email Rewriter"
                  description="Transform rough emails into polished, professional messages."
                />

                <ComingSoonCard
                  icon="📄"
                  title="Resume Tailor"
                  description="Adapt your resume to match specific job opportunities."
                />

                <ComingSoonCard
                  icon="✍️"
                  title="Cover Letter Generator"
                  description="Create tailored cover letters for your applications."
                />

                <ComingSoonCard
                  icon="💼"
                  title="LinkedIn Post Generator"
                  description="Turn your ideas into clear and engaging LinkedIn posts."
                />

                <ComingSoonCard
                  icon="📝"
                  title="Meeting Notes"
                  description="Transform rough meeting notes into structured summaries."
                />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
