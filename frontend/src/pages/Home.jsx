import Hero from '../components/layout/Hero';
import FeatureCard from '../components/home/FeatureCard';
import ComingSoonCard from '../components/home/ComingSoonCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <Hero />

        <section className="mb-16">
          <FeatureCard />
        </section>

        <section className="space-y-4 pb-16">
          <h2 className="text-3xl font-bold">More Tools</h2>

          <ComingSoonCard title="Resume Tailor" />

          <ComingSoonCard title="Cover Letter Generator" />

          <ComingSoonCard title="LinkedIn Post Generator" />
        </section>
      </div>
    </main>
  );
}
