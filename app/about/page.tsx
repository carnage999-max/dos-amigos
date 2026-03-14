import { Metadata } from 'next';
import AboutClient from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story of Dos Amigos Mexican Food & Cantina. A family-owned restaurant dedicated to bringing authentic Mexican flavors to Pittsfield, Maine.",
  keywords: ["about restaurant", "family owned restaurant Maine", "authentic mexican recipes", "Pittsfield business", "restaurant story"],
};

export default function AboutPage() {
  return <AboutClient />;
}
