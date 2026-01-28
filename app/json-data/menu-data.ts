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
        name: "Raw Plain Cuts",
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
    id: "deer-meat",
    name: "Deer Meat",
    icon_url: "/icons/deer-meat.svg",
    types: [
      {
        id: "deer-steaks",
        name: "Venison Steaks",
        icon: "/icons/deer-meat.svg",
        items: {
          id: "deer-steak-1",
          name: "Venison Steak (Loin)",
          description: "Lean venison loin steaks, tender and flavorful",
          image_url: "/images/menu/deer-steak-loin-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "deer-cuts",
        name: "Venison Cuts",
        icon: "/icons/deer-meat.svg",
        items: {
          id: "deer-cut-1",
          name: "Venison Shoulder",
          description: "Slow-cook venison shoulder cuts",
          image_url: "/images/menu/deer-shoulder-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "deer-mince",
        name: "Venison Mince",
        icon: "/icons/deer-meat.svg",
        items: {
          id: "deer-mince-1",
          name: "Venison Mince (Lean)",
          description: "Lean ground venison for kebabs and burgers",
          image_url: "/images/menu/deer-mince-lean-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "deer-specials",
        name: "Specials",
        icon: "/icons/deer-meat.svg",
        items: {
          id: "deer-special-1",
          name: "Venison Curry Cut",
          description: "Bone-in curry cut, perfect for slow curry",
          image_url: "/images/menu/deer-curry-cut-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
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
        id: "fish-whole",
        name: "Whole Fish",
        icon: "/icons/fish.png",
        items: {
          id: "fish-whole-1",
          name: "Tilapia (Whole)",
          description: "Fresh whole tilapia, cleaned and ready",
          image_url: "/images/menu/fish-tilapia-whole-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "fish-fillet",
        name: "Fillets",
        icon: "/icons/fish.png",
        items: {
          id: "fish-fillet-1",
          name: "Salmon Fillet",
          description: "Boneless salmon fillets",
          image_url: "/images/menu/fish-salmon-fillet-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "fish-shellfish",
        name: "Prawns & Shellfish",
        icon: "/icons/fish.png",
        items: {
          id: "fish-shellfish-1",
          name: "Prawns (Cleaned)",
          description: "Cleaned prawns, ready to cook",
          image_url: "/images/menu/fish-prawns-cleaned-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "fish-ready",
        name: "Ready To Cook",
        icon: "/icons/fish.png",
        items: {
          id: "fish-ready-1",
          name: "Fish Curry Cut (Rohu)",
          description: "Curry-cut pieces, perfect for fish curry",
          image_url: "/images/menu/fish-rohu-curry-cut-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
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
        id: "sausage",
        name: "Sausages",
        icon: "/icons/sausage.png",
        items: {
          id: "sausage-1",
          name: "Chicken Sausage (Classic)",
          description: "Classic seasoned chicken sausages",
          image_url: "/images/menu/sausage-chicken-classic-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "soup",
        name: "Soups",
        icon: "/icons/sausage.png",
        items: {
          id: "soup-1",
          name: "Chicken Corn Soup",
          description: "Comforting chicken and sweet corn soup",
          image_url: "/images/menu/soup-chicken-corn-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "marinated-sausage",
        name: "Marinated",
        icon: "/icons/sausage.png",
        items: {
          id: "marinated-sausage-1",
          name: "Tandoori Chicken Sausage",
          description: "Tandoori-marinated sausages, ready to grill",
          image_url: "/images/menu/sausage-chicken-tandoori-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
      {
        id: "broth",
        name: "Broth & Stock",
        icon: "/icons/sausage.png",
        items: {
          id: "broth-1",
          name: "Chicken Stock",
          description: "Rich chicken stock for soups and gravies",
          image_url: "/images/menu/broth-chicken-stock-1.jpg",
          images: [
            "/images/menu2.png",
            "/images/chicken-legs.png",
            "/images/menu3.png",
          ],
          time: "30 min",
          status: "445 kkl",
        },
      },
    ],
  },
];
