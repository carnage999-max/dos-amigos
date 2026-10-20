import { Metadata } from 'next';
import MenuClient from '@/components/pages/MenuClient';

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the Dos Amigos menu: Mexican Street Fries, the Smash Daddy Burrito, tacos, chimichangas and more in Pittsfield, Maine. Fresh ingredients, traditional recipes.",
  keywords: ["Mexican menu", "tacos Pittsfield", "burritos Maine", "chimichangas", "authentic mexican food", "Mexican Street Fries", "Smash Daddy Burrito"],
};

export default function MenuPage() {
  return <MenuClient />;
}
