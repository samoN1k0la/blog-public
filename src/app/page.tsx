import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentSection from '@/components/Content';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ContentSection />  
    </div>
  );
}
