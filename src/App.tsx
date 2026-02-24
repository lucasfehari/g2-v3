import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { StrategicPartners } from './components/StrategicPartners';
import { FounderGrowth } from './components/FounderGrowth';
import { TechPerformance } from './components/TechPerformance';
import { BentoFeatures } from './components/BentoFeatures';
import { PerformanceSection } from './components/PerformanceSection';
import { Certifications } from './components/Certifications';
import { ProjectsSection } from './components/ProjectsSection';
import { ClientsSection } from './components/ClientsSection';
import { PricingSection } from './components/PricingSection';
import { DataSection } from './components/DataSection';
import { Footer } from './components/Footer';

export default function App() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-mars-accent selection:text-black">
            <Cursor />
            <Header />
            <Hero />
            <Partners />
            <StrategicPartners />
            <FounderGrowth />
            <TechPerformance />
            <ProjectsSection />
            <ClientsSection />
            <BentoFeatures />
            <PerformanceSection />
            <Certifications />
            <PricingSection />
            <DataSection />
            <Footer />
        </div>
    );
}