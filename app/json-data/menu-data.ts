interface MenuItem {
  id: string;
  name: string;
  description: string;
  image_url: string;
  images: string[];
  time: string;
  status: string;
}

interface MenuType {
  id: string;
  name: string;
  icon: string;
  items: MenuItem;
}

interface MenuCategory {
  id: string;
  name: string;
  icon_url?: string;
  types: MenuType[];
}

export const menuData: MenuCategory[] = [
  {
    id: "chicken",
    name: "Chicken",
    icon_url: "/icons/chicken.svg",
    types: [
      {
        id: "raw-plain-cuts",
        name: "Raw Chicken",
        icon: "/icons/chicken.svg",
        items: {
          id: "whole-chicken-1",
          name: "Whole Chicken Fresh",
          description:
            "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
          image_url: "/images/menu/chicken/chicken1.png",
          images: [
            "/images/menu/chicken/chicken2.png",
            "/images/menu/chicken/chicken3.png",
            "/images/menu/chicken/chicken4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "marinated-chicken",
        name: "Marinated Chicken",
        icon: "/icons/chicken.svg",
        items: {
          id: "marintaed-chicken-1",
          name: "Chicken Breast",
          description:
            "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
          image_url: "/images/menu/chicken/marinated-chicken2.png",
          images: [
            "/images/menu/chicken/marinated-chicken4.png",
            "/images/menu/chicken/marinated-chicken3.png",
            "/images/menu/chicken/marinated-chicken1.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        icon: "/icons/chicken.svg",
        items: {
          id: "chicken-wings-1",
          name: "Chicken Breast",
          description:
            "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
          image_url: "/images/menu/chicken/chicken-wings1.png",
          images: [
            "/images/menu/chicken/chicken-wings2.png",
            "/images/menu/chicken/chicken-wings3.png",
            "/images/menu/chicken/chicken-wings4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "cooked",
        name: "Cooked",
        icon: "/icons/chicken.svg",
        items: {
          id: "cooked-1",
          name: "Chicken Breast",
          description:
            "The top choice among all our customers, delicious, healthy and a part of an amazing breakfast!",
          image_url: "/images/menu/chicken/cooked-chicken1.png",
          images: [
            "/images/menu/chicken/cooked-chicken2.png",
            "/images/menu/chicken/cooked-chicken3.png",
            "/images/menu/chicken/cooked-chicken4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
  {
    id: "lamb",
    name: "Lamb",
    icon_url: "/icons/lamb.svg",
    types: [
      {
        id: "lamb-chops",
        name: "Raw Lamb Cuts",
        icon: "/icons/lamb.svg",
        items: {
          id: "lamb-chop-1",
          name: "Raw Lamb Cuts",
          description: "Premium quality lamb chops",
          image_url: "/images/menu/lamb/raw-lamb-cuts1.png",
          images: [
            "/images/menu/lamb/raw-lamb-cuts2.png",
            "/images/menu/lamb/raw-lamb-cuts3.png",
            "/images/menu/lamb/raw-lamb-cuts4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "lamb-cuts",
        name: "Marinated Lamb",
        icon: "/icons/lamb.svg",
        items: {
          id: "lamb-cut-1",
          name: "Marinated Lamb",
          description: "Whole lamb leg",
          image_url: "/images/menu/lamb/marinated-lamb1.png",
          images: [
            "/images/menu/lamb/marinated-lamb2.png",
            "/images/menu/lamb/marinated-lamb3.png",
            "/images/menu/lamb/marinated-lamb4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "lamb-boneless",
        name: "Deer Meat",
        icon: "/icons/lamb.svg",
        items: {
          id: "lamb-boneless-1",
          name: "Deer Meat",
          description: "Boneless lamb cubes for curry and stew",
          image_url: "/images/menu/lamb/deer-meat1.png",
          images: [
            "/images/menu/lamb/deer-meat2.png",
            "/images/menu/lamb/deer-meat3.png",
            "/images/menu/lamb/deer-meat4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
  {
    id: "goat",
    name: "Goat",
    icon_url: "/icons/goat.svg",
    types: [
      {
        id: "goat-cuts",
        name: "Raw Goat Cubes",
        icon: "/icons/goat.svg",
        items: {
          id: "goat-cut-1",
          name: "Raw Goat Cubes",
          description: "Whole goat leg",
          image_url: "/images/menu/goat/goat1.png",
          images: [
            "/images/menu/goat/goat2.png",
            "/images/menu/goat/goat3.png",
            "/images/menu/goat/goat4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    icon_url: "/icons/fish.png",
    types: [
      {
        id: "marinated-fish",
        name: "Marinated Fish",
        icon: "/icons/fish.png",
        items: {
          id: "fish-1",
          name: "Bassa",
          description: "Fresh Bassa fish, cleaned and ready",
          image_url: "/images/menu/fish/fish1.png",
          images: [
            "/images/menu/fish/fish2.png",
            "/images/menu/fish/fish3.png",
            "/images/menu/fish/fish4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
  {
    id: "sausage-soup",
    name: "Sausage & Soup",
    icon_url: "/icons/sausage.png",
    types: [
      {
        id: "lamb-sausage",
        name: "Lamb Sausages",
        icon: "/icons/sausage.png",
        items: {
          id: "sausage-1",
          name: "Lamb Sausages",
          description: "Classic seasoned Lamb Sausages",
          image_url: "/images/menu/sausage/sausage1.png",
          images: [
            "/images/menu/sausage/sausage2.png",
            "/images/menu/sausage/sausage3.png",
            "/images/menu/sausage/sausage4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "goat-paya-soup",
        name: "Goat Paya Soups",
        icon: "/icons/sausage.png",
        items: {
          id: "soup-1",
          name: "Goat Paya Soup",
          description: "Comforting chicken and sweet corn soup",
          image_url: "/images/menu/soup/soup1.png",
          images: [
            "/images/menu/soup/soup2.png",
            "/images/menu/soup/soup3.png",
            "/images/menu/soup/soup4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
  {
    id: "vegeterian",
    name: "Vegeterian",
    icon_url: "/icons/veg.svg",
    types: [
      {
        id: "paneer-tikka",
        name: "Paneer Tikka",
        icon: "/icons/veg.svg",
        items: {
          id: "paneer-tikka",
          name: "Paneer Tikka",
          description:
            "Paneer marinated in spiced yogurt and grilled in a Tandoor, a traditional clay oven",
          image_url: "/images/menu/veg/veg1.png",
          images: [
            "/images/menu/veg/veg2.png",
            "/images/menu/veg/veg3.png",
            "/images/menu/veg/veg4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "soya-chaap",
        name: "Soya Chaap",
        icon: "/icons/veg.svg",
        items: {
          id: "soya-chaap-1",
          name: "Soya Chaap",
          description:
            "high-protein meat substitute made from soybean and flour dough wrapped around wooden sticks",
          image_url: "/images/menu/soya/soya1.png",
          images: [
            "/images/menu/soya/soya2.png",
            "/images/menu/soya/soya3.png",
            "/images/menu/soya/soya4.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },

  {
    id: "dip&sauces",
    name: "Dip & Sauces",
    icon_url: "/icons/sausage.svg",
    types: [
      {
        id: "green-chutney",
        name: "Green Chutney",
        icon: "/icons/sausage.svg",
        items: {
          id: "green-chutney",
          name: "Green Chutney",
          description:
            "Fresh and flavorful green chutney. Accompaniments are available in small and large sizes.",
          image_url: "/images/menu/sauce/sauce1.jpg",
          images: [
            "/images/menu/sauce/sauce2.jpg",
            "/images/menu/sauce/sauce3.jpg",
            "/images/menu/sauce/sauce4.jpg",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "tartar-sauce",
        name: "Tartar Sauce",
        icon: "/icons/sausage.svg",
        items: {
          id: "tartar-sauce",
          name: "Tartar Sauce",
          description:
            "Creamy tartar sauce with a tangy flavor. Accompaniments are available in small and large sizes.",
          image_url: "/images/menu/sauce/tartar1.png",
          images: [
            "/images/menu/sauce/tartar2.png",
            "/images/menu/sauce/tartar3.png",
            "/images/menu/sauce/tartar4.jpeg",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
];
