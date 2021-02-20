import { writable } from "svelte/store";

export const siteData = writable({
  name: "TWO BROTHERS & VAN",
  telephone: "0773 708648",
  email: "twobrothers_and_van@gmail.com",
  y: 0,
});

export const services = writable([
  {
    id: "service1",
    name: "Residential Moving",
    text: `
         When you hire Denver movers for a local relocation from one place to another is not just about packing and waiting for your Denver movers to arrive. There is an endless array of details to attend to… Changing utilities, forwarding the mail, setting up telephone service, internet and cable TV just to name a few. So naturally you want to feel confident that you have hired professional Denver movers with the experience and skill to execute your move to your satisfaction.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
  {
    id: "service2",
    name: "Commercial Business & Office Movers",
    text:
      `Commercial movers like Galt Moving Denver are equipped to handle not only your typical office furniture but also the computers, monitors, file cabinets, copiers and other important electronic equipment. Your commercial movers need to understand that moving offices is a time critical task that requires attention to detail. Many times these type of Denver commercial moves are conducted in off hours, on weekends or over holidays. Your commercial mover should be sensitive to minimizing “down-time” for your commercial move, maintaining the highest levels of productivity for your business.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
  {
    id: "service3",
    name: "Loading & Unloading",
    text:
      `Looking to save some money on your out of state move by renting/driving  but don’t want to do the heavy lifting? Maybe you need some help loading pods or mobile storage containers? Galt has solutions for any of your loading or unloading service needs in Denver.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
  {
    id: "service4",
    name: "Packing & Unpacking",
    text:
      `Whether you just want help with the breakables or want the full service experience, Galt Moving Denver has the packing experts to get it done right. Galt will come the day before your move and will take care of packing the contents of your entire home.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
  {
    id: "service5",
    name: "Long Distance Moving",
    text:
      `Long distance moving is typically a time of uncertainty. It is stressful by definition. So hiring the right long distance mover is important. To be sure, Galt Moving Denver knows how to make long distance moving a breeze.`,
    img: "/images/pic1.jpg",
    icon: "",
  },
]);
