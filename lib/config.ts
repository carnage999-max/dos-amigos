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
    uberEats: {
      name: "Uber Eats",
      url: "https://www.ubereats.com",
      available: true,
    },
    doorDash: {
      name: "DoorDash",
      url: "https://www.doordash.com",
      available: true,
    },
    inHouse: {
      name: "Direct Order",
      url: "/order/direct",
      available: false, // Future ready
    },
  },

  story: [
    "Dos Amigos has been serving authentic Mexican cuisine to Pittsfield and the surrounding communities since 2015. We're a family-owned restaurant committed to quality, consistency, and value.",
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
    { number: "1", name: "Taco (Soft or Hard)", price: "$3.25", description: "Choice of beef, chicken, or pork" },
    { number: "2", name: "Enchilada", price: "$4.50", description: "Choice of beef, chicken, cheese, or bean" },
    { number: "3", name: "Quesadilla (Cheese)", price: "$9.99", description: "Add meat +$3" },
    { number: "4", name: "Tamale", price: "$4.75", description: "Pork or chicken" },
    { number: "5", name: "Chile Relleno", price: "$5.99", description: "Poblano pepper stuffed with cheese" },
    { number: "6", name: "Tostada", price: "$4.25", description: "Flat crispy tortilla with toppings" },
  ],

  appetizers: [
    { number: "7", name: "Nachos Supreme", price: "$12.99", description: "Loaded with cheese, beans, jalapeños, sour cream" },
    { number: "8", name: "Queso Fundido", price: "$9.99", description: "Melted cheese dip with chorizo" },
    { number: "9", name: "Guacamole & Chips", price: "$8.99", description: "Fresh made daily" },
    { number: "10", name: "Wings (6pc)", price: "$10.99", description: "Buffalo, BBQ, or mango habanero" },
    { number: "11", name: "Street Corn", price: "$6.99", description: "Elote style with mayo, cheese, chili" },
  ],

  entrees: [
    { number: "12", name: "Carnitas Plate", price: "$15.99", description: "Slow-cooked pork with rice, beans, tortillas" },
    { number: "13", name: "Carne Asada", price: "$17.99", description: "Grilled steak with peppers and onions" },
    { number: "14", name: "Burrito Bowl", price: "$12.99", description: "Your choice of protein over rice with all the fixings" },
    { number: "15", name: "Enchiladas (3)", price: "$13.99", description: "Choice of sauce: red, green, or mole" },
    { number: "16", name: "Taco Plate (3)", price: "$12.99", description: "Soft or hard shell with sides" },
    { number: "17", name: "Combo Platter", price: "$14.99", description: "Pick any 2: taco, enchilada, tamale, or chile relleno" },
    { number: "18", name: "Fajitas", price: "$16.99", description: "Sizzling skillet - chicken, steak, or mixed" },
    { number: "19", name: "Chimichanga", price: "$14.99", description: "Deep fried burrito with choice of filling" },
    { number: "20", name: "Torta", price: "$11.99", description: "Mexican sandwich on telera bread" },
    { number: "21", name: "Flautas (4)", price: "$13.99", description: "Rolled crispy tacos with toppings" },
  ],

  sides: [
    { number: "22", name: "Rice", price: "$3.50" },
    { number: "23", name: "Beans (Refried or Black)", price: "$3.50" },
    { number: "24", name: "Rice & Beans", price: "$6.00" },
    { number: "25", name: "Chips & Salsa", price: "$4.99" },
    { number: "26", name: "Sour Cream", price: "$1.50" },
    { number: "27", name: "Extra Cheese", price: "$2.00" },
    { number: "28", name: "Jalapeños", price: "$1.00" },
  ],
};
