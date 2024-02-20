import Image from 'next/image';
import Header from '@/components/Header';
import HeroSection from '@/components/section/HeroSection';
import ProductSection from '@/components/section/ProductSection';
import FloatingIcon from '@/components/FloatingIcon';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/section/ServicesSection';
import TestimonialsSection from '@/components/section/TestimonialsSection';
import Partnership from '@/components/section/Partnership';
import PortfolioSection from '@/components/section/PortfolioSection';
import AboutSection from '@/components/section/AboutSection';
import LocationSection from '@/components/section/LocationSection';
// import { WhatsappLogo } from '@phosphor-icons/react';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection/>
      <ProductSection/>
      <ServicesSection/>
      <LocationSection/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <Partnership/>
      <FloatingIcon/>
      <Footer/>
    </>
  );
}
