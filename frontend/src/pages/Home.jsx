import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-6">
          <Hero />

          {/* Email Form will be added in Card 4 */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
