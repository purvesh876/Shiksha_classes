import Header from './components/Header';
import CoursesSection from './components/CoursesSection';
// import StudentsSection from './components/StudentsSection';
import DirectorSection from './components/DirectorSection';
import SuccessStories from './components/SuccessStories';
import GallerySection from './components/GallerySection';
import ContactForm from './components/ContactForm';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <CoursesSection />
      {/* <StudentsSection /> */}
      <DirectorSection />
      <SuccessStories />
      <GallerySection />
      <ContactForm />
      <HelpSection />
      <FAQSection/>
      <Footer />
    </div>
  );
}

export default App;
