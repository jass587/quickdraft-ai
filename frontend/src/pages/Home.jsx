import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import EmailForm from '../components/email/EmailForm';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <Hero />

          <div className="mt-10">
            <EmailForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
