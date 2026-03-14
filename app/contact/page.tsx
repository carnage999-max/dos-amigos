import { Metadata } from 'next';
import ContactClient from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dos Amigos Mexican Food & Cantina. Call us, visit us at 135 Main St., or send us a message. We'd love to hear from you!",
  keywords: ["contact restaurant", "Pittsfield Maine cantina", "reservations Pittsfield", "order mexican food", "Dos Amigos contact"],
};

export default function ContactPage() {
  return <ContactClient />;
}
