"use client"
import React from 'react';

import Hero from '@/components/LandingPage/Hero';
import Features from '@/components/LandingPage/Features';
import ProductShowcase from '@/components/LandingPage/ProductShowcase';
import Testimonials from '@/components/LandingPage/Testimonials';
import Footer from '@/components/LandingPage/Footer';

const Index: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-purple-50">
      
      <Hero />
      <ProductShowcase />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;