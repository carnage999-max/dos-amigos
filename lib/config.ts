export const restaurantInfo = {
  name: "Dos Amigos",
  tagline: "Mexican Food and Cantina",
  address: "135 Main St., Pittsfield, ME 04967",
  phone: "+12079478226",
  phoneDisplay: "(207) 947-TACO",
  email: "info@dosamigosmaine.com",

  hours: {
    monday: { open: "11:00 AM", close: "9:00 PM", closed: false },
    tuesday: { open: "11:00 AM", close: "9:00 PM", closed: false },
    wednesday: { open: "11:00 AM", close: "9:00 PM", closed: false },
    thursday: { open: "11:00 AM", close: "9:00 PM", closed: false },
    friday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    saturday: { open: "11:00 AM", close: "10:00 PM", closed: false },
    sunday: { open: "12:00 PM", close: "8:00 PM", closed: false },
  },

  coordinates: {
    lat: 44.7792,
    lng: -69.3828,
  },

  orderPlatforms: {
    // uberEats: {
    //   name: "Uber Eats",
    //   url: "https://www.ubereats.com",
    //   available: true,
    // },
    // doorDash: {
    //   name: "DoorDash",
    //   url: "https://www.doordash.com",
    //   available: true,
    // },
    // inHouse: {
    //   name: "Direct Order",
    //   url: "/order/direct",
    //   available: false, // Future ready
    // },
  },

  story: [
    "Dos Amigos is bringing authentic Mexican cuisine to Pittsfield and the surrounding communities. We're a family-owned restaurant committed to quality, consistency, and value.",
    "Our recipes honor traditional Mexican cooking methods while using fresh, locally-sourced ingredients whenever possible. From our hand-pressed tortillas to our slow-cooked carnitas, every dish is prepared with care.",
    "Whether you're dining in, taking out, or having us deliver, we treat every meal like we're serving our own family. That's the Dos Amigos difference.",
  ],
};

export const signatureItems = [
  { number: "12", name: "Carnitas Tacos", price: "$12.99" },
  { number: "8", name: "Burrito Supreme", price: "$13.99" },
  { number: "21", name: "Chicken Chimichanga", price: "$14.99" },
  { number: "3", name: "Cheese Quesadilla", price: "$9.99" },
  { number: "15", name: "Enchiladas Verdes", price: "$13.99" },
  { number: "18", name: "Fajitas (Steak)", price: "$16.99" },
];

export const menuData = {
  aLaCarte: [
    { number: "29", name: "BEEF TACO", price: "$3.25", description: "Soft or hard shell, lettuce, tomato, sour cream, choice of filling" },
    { number: "30", name: "PORK TACO", price: "$3.49", description: "Soft or hard shell, lettuce, tomato, sour cream, choice of filling" },
    { number: "31", name: "BEEF SOFT TACO", price: "$3.25", description: "Flour tortilla, beef" },
    { number: "32", name: "CHICKEN TACO", price: "$3.49", description: "Soft or hard shell, lettuce, tomato, sour cream, choice of filling" },
    { number: "33", name: "TACO SALAD", price: "$8.99", description: "Lettuce, beef or chicken, tomato, cheese, sour cream, salsa, crispy flour tortilla" },
    { number: "34", name: "SUPER NACHOS", price: "$8.49", description: "Flour tortilla chips layered with beans, beef, jalapeños, melted cheese, sour cream, salsa" },
    { number: "35", name: "CHICKEN QUESADILLA", price: "$9.95", description: "Flour tortilla filled with seasoned grilled chicken with sour cream, salsa" },
    { number: "36", name: "TOSTADA", price: "$3.99", description: "Crispy corn tortilla, topped with beans, beef, lettuce, tomato, cheese" },
    { number: "37", name: "BURRITO", price: "$4.99", description: "Soft flour tortilla filled with meat or beans, topped with salsa, melted cheese, sour cream, lettuce, tomatoes" },
    { number: "38", name: "CHIMICHANGA", price: "$7.99", description: "Deep-fried burrito filled with seasoned meat, topped with melted cheese, sour cream, salsa" },
  ],

  sideDishes: [
    { number: "39", name: "NACHO CHIPS", price: "$1.59" },
    { number: "40", name: "GUACAMOLE", price: "$1.25" },
    { number: "41", name: "SOUR CREAM", price: "$1.00" },
    { number: "42", name: "SALSA", price: "$1.10" },
    { number: "43", name: "ADD NACHO CHEESE", price: "$0.69" },
    { number: "44", name: "REFRIED BEANS", price: "$1.89" },
    { number: "45", name: "SPANISH RICE", price: "$1.89" },
    { number: "46", name: "SPICY CHILI", price: "$3.99" },
    { number: "47", name: "CINNAMON CRISPIES", price: "$1.80" },
  ],

  fillings: [
    { name: "Salad", price: "$6.25", description: "Crisp lettuce, tomato, onions, cheese, sour cream, choice of filling" },
    { name: "Tacos (3)", description: "Extra bean ground beef, sour famous spicy cheddar, chicken breast, steak, choice of hard or soft shell" },
    { name: "Tostado", price: "$6.25", description: "Lettuce, tomatoes, bell peppers, onions, cheese, sour cream, with salsa on the side" },
  ],

  appetizers: [
    { number: "1", name: "CHICKEN WINGS (6)", price: "$9.49", description: "Deep fried wings with sweet spice or mild, served with sour cream, salsa" },
    { number: "2", name: "CHEESE QUESADILLA", price: "$7.99", description: "Flour tortilla filled with melted cheese, served with sour cream, salsa" },
    { number: "3", name: "PORK QUESADILLA", price: "$9.25", description: "Flour tortilla filled with slow cooked pulled pork and melted cheese, served with sour cream, salsa" },
    { number: "4", name: "CHICKEN QUESADILLA", price: "$9.95", description: "Flour tortilla filled with seasoned grilled chicken and melted cheese, served with sour cream, salsa" },
    { number: "5", name: "STEAK QUESADILLA", price: "$10.25", description: "Flour tortilla filled with seasoned grilled steak, bean, melted peppers & onions, melted cheese, served with sour cream, salsa" },
  ],

  extraAndDesserts: [
    { number: "47", name: "CHOCOLATE CHIMICHANGA", price: "$4.99", description: "Soft fried tortilla filled with chocolate, topped with chocolate syrup, served with ice cream" },
    { number: "48", name: "FRIED ICE CREAM", price: "$5.29", description: "Vanilla ice cream rolled in cornflakes and cinnamon sugar, topped with chocolate syrup, whipped cream and a cherry" },
    { number: "49", name: "FLAN", price: "$4.49", description: "Traditional Mexican custard dessert with caramel sauce" },
  ],

  childrensPlate: [
    { number: "7", name: "CHILDREN'S PLATE", price: "$4.99", description: "Beef taco (hard or soft), beans, rice and nacho cheese, less spice" },
  ],
};
