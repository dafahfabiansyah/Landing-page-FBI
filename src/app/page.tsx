import { Suspense } from 'react';
import Loading from './loading';
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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home - Fresh Beton Indonesia",
  description: "Home page Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};
export default function Home() {
  return (
    <>
      {/* <Suspense fallback={<div>loading feed....</div>}> */}
      <Suspense fallback={<Loading/>}>
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
      </Suspense>
    </>
  );
}
