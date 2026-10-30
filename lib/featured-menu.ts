/** Featured-menu prices are in USD; maintain them here rather than duplicating display strings. */
export const friesSizes = [
  {key:"small",label:"SMALL",description:"Personal",ounces:"~10–12 oz"},
  {key:"medium",label:"MEDIUM",description:"Loaded Meal",ounces:"~18–20 oz"},
  {key:"large",label:"LARGE",description:"Shareable",ounces:"~28–32 oz"},
] as const;

export const streetFries = [
  {id:"street-corn",name:"Street Corn Fries",image:"/food/street-corn-fries.jpeg",description:"Mexican street-corn inspired loaded fries with a creamy, tangy finish.",prices:[7.99,11.99,16.99]},
  {id:"chicken-fiesta",name:"Chicken Fiesta Fries",image:"/food/chicken-fiesta-fries.jpeg",description:"A fiesta-style loaded fry tray with seasoned chicken.",prices:[8.99,12.99,17.99]},
  {id:"nacho-libre",name:"Nacho Libre Fries",image:"/food/nacho-libre-fries.jpeg",description:"All the fun of loaded nachos, built on crispy fries.",prices:[8.99,12.99,17.99]},
  {id:"crunch-daddy",name:"Crunch Daddy™ Fries",image:"/food/crunch-daddy-fries.jpeg",description:"Taco-meat loaded fries with the signature crunch of Fritos.",prices:[8.99,12.99,17.99]},
  {id:"fajita",name:"Fajita Steak Fries",image:"/food/fajita-fries.jpeg",description:"A hearty loaded-fry take on savory steak fajitas.",prices:[9.99,14.99,19.99]},
  {id:"birria",name:"Birria Fries",image:"/food/birria-fries.jpeg",description:"Rich birria-inspired flavors over a generously loaded bed of fries.",prices:[9.99,14.99,19.99]},
  {id:"diablo",name:"Diablo Fries",image:"/food/diablo-fries.jpeg",description:"A fiery, spice-forward loaded fry tray for heat lovers.",prices:[8.99,12.99,17.99]},
] as const;

export const smashDaddy = {
 name:"Smash Daddy Burrito™",
 image:"/food/smash-daddy-burittos.jpeg",
 price:14.99,
 description:"Smashburger beef, queso, Mexican street fries, pickles, diced onions, pickled jalapeños, cotija, Tajín and spicy burger sauce — wrapped into one seriously filling burrito.",
 extras:[
  {name:"Extra smashburger beef",price:3},
  {name:"Extra queso",price:1.5},
  {name:"Guacamole",price:1.5},
 ],
 mealPriceFrom:18.99,
 mealPriceTo:19.99,
} as const;

export function dollars(value:number){return "$"+value.toFixed(2);}
