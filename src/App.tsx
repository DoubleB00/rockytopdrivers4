import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import WhyChooseUs from './components/WhyChooseUs';
import BookNow from './components/BookNow';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <WhyChooseUs />
        <BookNow />
        <BookingForm />
        <About />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
