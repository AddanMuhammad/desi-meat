interface bestSellerCard {
  title: string;
  description: string;
  button: {
    text: string;
    isGradient: boolean;
    isPrimary: boolean;
  };
  img_url: string;
  price: number;
  time: string;
  status: string;
}

export const bestSellerData: bestSellerCard[] = [
  {
    title: "Mutton Leg",
    description:
      "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/mutton-leg.png",
    price: 15,
    time: "30 min",
    status: "445 kkl",
  },
  {
    title: "Lamb Shoulder",
    description:
      "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/lamb-shoulder.png",
    price: 15,
    time: "30 min",
    status: "445 kkl",
  },
  {
    title: "Full Chicken",
    description:
      "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/chicken-roast.png",
    price: 15,
    time: "30 min",
    status: "445 kkl",
  },
  {
    title: "Chicken Leg",
    description:
      "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/chicken-legs.png",
    price: 15,
    time: "30 min",
    status: "445 kkl",
  },
];
