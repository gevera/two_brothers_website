import { writable } from "svelte/store";

export const siteData = writable({
  name: "TWO BROTHERS & VAN",
  telephone: "+44 773 708648",
  email: "twobrothers_and_van@gmail.com",
  y: 0,
});

export const services = writable([
  {
    id: "service1",
    name: "Home and Apartment Removals",
    text:
      `Looking for a professional removal company to handle your next household relocation?
       Look no further. We have the skills and experience to provide you with the relocation solutions you need. 
       No matter where you're going or what your budget is, we have an affordable, cost-effective home moving solution for you.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
  {
    id: "service3",
    name: "Business & Office Moves",
    text:
      `Movers like Two Brothers & Van are equipped to handle not only your typical office furniture but also the computers, monitors, file cabinets, copiers and other important electronic equipment.
      We understand that moving offices is a time critical task that requires attention to detail.
      Many times these type of commercial moves are conducted in off hours, on weekends or over holidays.
      We are dedicated to minimizing “down-time” for your office move, maintaining the highest levels of productivity for your business.`,
    img: "/images/office.jpg",
    icon: "",
  },
  // {
  //   id: "service4",
  //   name: "Loading & Unloading",
  //   text:
  //     `Looking to save some money on your move by renting/driving but don’t want to do the heavy lifting?
  //      Maybe you need some help loading pods or mobile storage containers?
  //      We have solutions for any of your loading or unloading service needs in Greater London area.`,
  //   img: "/images/loading.jpg",
  //   icon: "",
  // },
  {
    id: "service5",
    name: "Packing & Unpacking",
    text:
      `Whether you just want help with the breakables or want the full service experience, 
      Two Brothers & Van has the packing experts to get it done right. We will come the day before your move and will take care of packing the contents of your entire home or office.`,
    img: "/images/packaging.webp",
    icon: "",
  },

  {
    id: "service6",
    name: "Long Distance Moving",
    text:
      `Long distance moving is transporting your belongings safely across the country. It is stressful by definition.
       So hiring the right long distance mover is important. To be sure, we know how to make long distance moving a breeze.`,
    img: "/images/long.jpg",
    icon: "",
  },
  {
    id: "service7",
    name: "Delivery Service",
    text:
      `If you need a quick and reliable way to transport loaded pallets but don’t have a way to get it to your location,
       don’t worry – we can help! Our professionally-trained movers will deliver it wherever it needs to go.`,
    img: "/images/delivery.webp",
    icon: "",
  },
]);
