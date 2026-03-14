import { Metadata } from 'next';
import LocationClient from '@/components/pages/LocationClient';

export const metadata: Metadata = {
  title: "Location & Hours",
  description: "Find Dos Amigos at 135 Main St., Pittsfield, ME. Check our hours for dine-in, takeout and delivery. Authentic Mexican food in the heart of downtown Pittsfield.",
  keywords: ["restaurant location", "Pittsfield Maine restaurant", "mexican food hours", "tacos near me", "best mexican food Pittsfield"],
};

export default function LocationPage() {
  return <LocationClient />;
}
