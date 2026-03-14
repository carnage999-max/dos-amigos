import { Metadata } from 'next';
import MenuClient from '@/components/pages/MenuClient';

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the Dos Amigos menu: authentic Mexican tacos, burritos, chimichangas and more in Pittsfield, Maine. Fresh ingredients, traditional recipes.",
  keywords: ["Mexican menu", "tacos Pittsfield", "burritos Maine", "chimichangas", "authentic mexican food"],
};

export default function MenuPage() {
  return <MenuClient />;
}
