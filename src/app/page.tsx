import Image from 'next/image';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import FloatingIcon from '@/components/FloatingIcon';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
// import { WhatsappLogo } from '@phosphor-icons/react';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductSection/>
      <ServicesSection/>
      <Footer/>
      {/* <FloatingIcon/> */}
    </>
  );
}
