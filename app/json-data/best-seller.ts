interface bestSellerCard {
  title: string;
  description: string;
  button: {
    text: string;
    isGradient: boolean;
    isPrimary: boolean;
  };
  img_url: string;
  detail: string;
}

export const bestSellerData: bestSellerCard[] = [
  {
    title: "Tandoori Chicken",
    description:
      "Smoky, juicy tandoori chicken marinated in traditional spices and grilled to perfection.",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/tandoori-chicken.jpg",
    detail: "See More",
  },

  {
    title: "Peri Peri Chicken",
    description:
      "Spicy and tangy peri peri chicken packed with bold flavors and a fiery kick.",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/peri-peri-chicken.jpg",
    detail: "See More",
  },

  {
    title: "Lamb Chops",
    description:
      "Tender, juicy lamb chops seasoned with aromatic herbs and grilled to mouth-watering perfection.",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/lamb-chops.jpg",
    detail: "See More",
  },

  {
    title: "Fish Basa",
    description:
      "Soft and flaky basa fish fillet, lightly seasoned and cooked for a fresh, delicate taste.",
    button: {
      text: "Order Online",
      isGradient: true,
      isPrimary: true,
    },
    img_url: "/images/fish-basa.jpg",
    detail: "See More",
  },
];
