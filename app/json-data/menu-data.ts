interface MenuItem {
    id: string;
    name: string;
    description: string;
    image_url: string;
}

interface MenuType {
    id: string;
    name: string;
    icon: string;
    items: MenuItem[];
}

interface MenuCategory {
    id: string;
    name: string;
    icon_url?: string;
    types: MenuType[];
}

export const menuData: MenuCategory[] = [
    {
        id: 'chicken',
        name: 'Chicken',
        icon_url: '/icons/chicken.svg',
        types: [
            {
                id: 'whole-chicken',
                name: 'Whole Chicken',
                icon: '/icons/chicken.svg',
                items: [
                    {
                        id: 'whole-chicken-1',
                        name: 'Whole Chicken Fresh',
                        description: 'Fresh whole chicken, ready to cook',
                        image_url: '/images/menu/chicken-whole-1.jpg'
                    },
                    {
                        id: 'whole-chicken-2',
                        name: 'Whole Chicken Premium',
                        description: 'Premium quality whole chicken',
                        image_url: '/images/menu/chicken-whole-2.jpg'
                    },
                    {
                        id: 'whole-chicken-3',
                        name: 'Whole Chicken Marinated',
                        description: 'Pre-marinated whole chicken',
                        image_url: '/images/menu/chicken-whole-3.jpg'
                    },
                    {
                        id: 'whole-chicken-4',
                        name: 'Whole Chicken Halal',
                        description: 'Halal certified whole chicken',
                        image_url: '/images/menu/chicken-whole-4.jpg'
                    }
                ]
            },
            {
                id: 'marinated-chicken',
                name: 'Marinated Chicken',
                icon: '/icons/chicken.svg',
                items: [
                    {
                        id: 'marintaed-chicken-1',
                        name: 'Chicken Breast',
                        description: 'Boneless chicken breast pieces',
                        image_url: '/images/menu/chicken-breast-1.jpg'
                    },
                    {
                        id: 'marintaed-chicken-2',
                        name: 'Chicken Thighs',
                        description: 'Juicy chicken thigh pieces',
                        image_url: '/images/menu/chicken-thighs-1.jpg'
                    },
                    {
                        id: 'marintaed-chicken-3',
                        name: 'Chicken Wings',
                        description: 'Fresh chicken wings',
                        image_url: '/images/menu/chicken-wings-1.jpg'
                    },
                    {
                        id: 'marintaed-chicken-4',
                        name: 'Chicken Drumsticks',
                        description: 'Tender chicken drumsticks',
                        image_url: '/images/menu/chicken-drumsticks-1.jpg'
                    }
                ]
            },
            {
                id: 'chicken-wings',
                name: 'Chicken Wings',
                icon: '/icons/chicken.svg',
                items: [
                    {
                        id: 'chicken-wings-1',
                        name: 'Chicken Breast',
                        description: 'Boneless chicken breast pieces',
                        image_url: '/images/menu/chicken-breast-1.jpg'
                    },
                    {
                        id: 'chicken-wings-2',
                        name: 'Chicken Thighs',
                        description: 'Juicy chicken thigh pieces',
                        image_url: '/images/menu/chicken-thighs-1.jpg'
                    },
                    {
                        id: 'chicken-wings-3',
                        name: 'Chicken Wings',
                        description: 'Fresh chicken wings',
                        image_url: '/images/menu/chicken-wings-1.jpg'
                    },
                    {
                        id: 'chicken-wings-4',
                        name: 'Chicken Drumsticks',
                        description: 'Tender chicken drumsticks',
                        image_url: '/images/menu/chicken-drumsticks-1.jpg'
                    }
                ]
            },
            {
                id: 'cooked',
                name: 'Cooked',
                icon: '/icons/chicken.svg',
                items: [
                    {
                        id: 'cooked-1',
                        name: 'Chicken Breast',
                        description: 'Boneless chicken breast pieces',
                        image_url: '/images/menu/chicken-breast-1.jpg'
                    },
                    {
                        id: 'cooked-2',
                        name: 'Chicken Thighs',
                        description: 'Juicy chicken thigh pieces',
                        image_url: '/images/menu/chicken-thighs-1.jpg'
                    },
                    {
                        id: 'cooked-3',
                        name: 'Chicken Wings',
                        description: 'Fresh chicken wings',
                        image_url: '/images/menu/chicken-wings-1.jpg'
                    },
                    {
                        id: 'cooked-4',
                        name: 'Chicken Drumsticks',
                        description: 'Tender chicken drumsticks',
                        image_url: '/images/menu/chicken-drumsticks-1.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 'lamb',
        name: 'Lamb',
        icon_url: '/icons/lamb.svg',
        types: [
            {
                id: 'lamb-chops',
                name: 'Lamb Chops',
                icon: '/icons/lamb.svg',
                items: [
                    {
                        id: 'lamb-chop-1',
                        name: 'Lamb Chops Premium',
                        description: 'Premium quality lamb chops',
                        image_url: '/images/menu/lamb-chops-1.jpg'
                    },
                    {
                        id: 'lamb-chop-2',
                        name: 'Lamb Chops Marinated',
                        description: 'Pre-marinated lamb chops',
                        image_url: '/images/menu/lamb-chops-2.jpg'
                    },
                    {
                        id: 'lamb-chop-3',
                        name: 'Lamb Chops Fresh',
                        description: 'Fresh lamb chops',
                        image_url: '/images/menu/lamb-chops-3.jpg'
                    },
                    {
                        id: 'lamb-chop-4',
                        name: 'Lamb Chops Halal',
                        description: 'Halal certified lamb chops',
                        image_url: '/images/menu/lamb-chops-4.jpg'
                    },
                    {
                        id: 'lamb-chop-5',
                        name: 'Lamb Chops Thin Cut',
                        description: 'Thin-cut lamb chops for quick pan sear',
                        image_url: '/images/menu/lamb-chops-thin-1.jpg'
                    },
                    {
                        id: 'lamb-chop-6',
                        name: 'Lamb Chops Family Pack',
                        description: 'Value pack lamb chops for family meals',
                        image_url: '/images/menu/lamb-chops-family-1.jpg'
                    }
                ]
            },
            {
                id: 'lamb-cuts',
                name: 'Lamb Cuts',
                icon: '/icons/lamb.svg',
                items: [
                    {
                        id: 'lamb-cut-1',
                        name: 'Lamb Leg',
                        description: 'Whole lamb leg',
                        image_url: '/images/menu/lamb-leg-1.jpg'
                    },
                    {
                        id: 'lamb-cut-2',
                        name: 'Lamb Shoulder',
                        description: 'Lamb shoulder cuts',
                        image_url: '/images/menu/lamb-shoulder-1.jpg'
                    },
                    {
                        id: 'lamb-cut-3',
                        name: 'Lamb Mince',
                        description: 'Fresh lamb mince',
                        image_url: '/images/menu/lamb-mince-1.jpg'
                    },
                    {
                        id: 'lamb-cut-4',
                        name: 'Lamb Ribs',
                        description: 'Tender lamb ribs',
                        image_url: '/images/menu/lamb-ribs-1.jpg'
                    },
                    {
                        id: 'lamb-cut-5',
                        name: 'Lamb Neck',
                        description: 'Lamb neck pieces for slow cooking',
                        image_url: '/images/menu/lamb-neck-1.jpg'
                    },
                    {
                        id: 'lamb-cut-6',
                        name: 'Lamb Shank',
                        description: 'Meaty lamb shank, perfect for braising',
                        image_url: '/images/menu/lamb-shank-1.jpg'
                    }
                ]
            },
            {
                id: 'lamb-boneless',
                name: 'Boneless Lamb',
                icon: '/icons/lamb.svg',
                items: [
                    {
                        id: 'lamb-boneless-1',
                        name: 'Boneless Lamb Cubes',
                        description: 'Boneless lamb cubes for curry and stew',
                        image_url: '/images/menu/lamb-boneless-cubes-1.jpg'
                    },
                    {
                        id: 'lamb-boneless-2',
                        name: 'Boneless Lamb Strips',
                        description: 'Thin strips for stir fry and quick cooking',
                        image_url: '/images/menu/lamb-boneless-strips-1.jpg'
                    },
                    {
                        id: 'lamb-boneless-3',
                        name: 'Boneless Lamb (Biryani Cut)',
                        description: 'Biryani-friendly boneless pieces',
                        image_url: '/images/menu/lamb-boneless-biryani-1.jpg'
                    },
                    {
                        id: 'lamb-boneless-4',
                        name: 'Boneless Lamb (Premium)',
                        description: 'Premium trimmed boneless lamb',
                        image_url: '/images/menu/lamb-boneless-premium-1.jpg'
                    }
                ]
            },
            {
                id: 'lamb-offal',
                name: 'Lamb Offal',
                icon: '/icons/lamb.svg',
                items: [
                    {
                        id: 'lamb-offal-1',
                        name: 'Lamb Liver',
                        description: 'Fresh lamb liver, high in iron',
                        image_url: '/images/menu/lamb-liver-1.jpg'
                    },
                    {
                        id: 'lamb-offal-2',
                        name: 'Lamb Kidney',
                        description: 'Fresh lamb kidney for fry or curry',
                        image_url: '/images/menu/lamb-kidney-1.jpg'
                    },
                    {
                        id: 'lamb-offal-3',
                        name: 'Lamb Heart',
                        description: 'Fresh lamb heart, great for grilling',
                        image_url: '/images/menu/lamb-heart-1.jpg'
                    },
                    {
                        id: 'lamb-offal-4',
                        name: 'Lamb Tripe',
                        description: 'Cleaned lamb tripe for traditional recipes',
                        image_url: '/images/menu/lamb-tripe-1.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 'goat',
        name: 'Goat',
        icon_url: '/icons/goat.svg',
        types: [
            {
                id: 'goat-cuts',
                name: 'Goat Cuts',
                icon: '/icons/goat.svg',
                items: [
                    {
                        id: 'goat-cut-1',
                        name: 'Goat Leg',
                        description: 'Whole goat leg',
                        image_url: '/images/menu/goat-leg-1.jpg'
                    },
                    {
                        id: 'goat-cut-2',
                        name: 'Goat Shoulder',
                        description: 'Goat shoulder pieces',
                        image_url: '/images/menu/goat-shoulder-1.jpg'
                    },
                    {
                        id: 'goat-cut-3',
                        name: 'Goat Mince',
                        description: 'Fresh goat mince',
                        image_url: '/images/menu/goat-mince-1.jpg'
                    },
                    {
                        id: 'goat-cut-4',
                        name: 'Goat Curry Cut',
                        description: 'Perfectly cut for curry',
                        image_url: '/images/menu/goat-curry-1.jpg'
                    },
                    {
                        id: 'goat-cut-5',
                        name: 'Goat Ribs',
                        description: 'Meaty goat ribs for slow cook and BBQ',
                        image_url: '/images/menu/goat-ribs-1.jpg'
                    },
                    {
                        id: 'goat-cut-6',
                        name: 'Goat Shank',
                        description: 'Rich goat shank cuts, ideal for stew',
                        image_url: '/images/menu/goat-shank-1.jpg'
                    }
                ]
            },
            {
                id: 'goat-whole',
                name: 'Whole Goat',
                icon: '/icons/goat.svg',
                items: [
                    {
                        id: 'goat-whole-1',
                        name: 'Whole Goat Fresh',
                        description: 'Fresh whole goat',
                        image_url: '/images/menu/goat-whole-1.jpg'
                    },
                    {
                        id: 'goat-whole-2',
                        name: 'Whole Goat Premium',
                        description: 'Premium quality whole goat',
                        image_url: '/images/menu/goat-whole-2.jpg'
                    },
                    {
                        id: 'goat-whole-3',
                        name: 'Whole Goat Halal',
                        description: 'Halal certified whole goat',
                        image_url: '/images/menu/goat-whole-3.jpg'
                    },
                    {
                        id: 'goat-whole-4',
                        name: 'Whole Goat Marinated',
                        description: 'Pre-marinated whole goat',
                        image_url: '/images/menu/goat-whole-4.jpg'
                    },
                    {
                        id: 'goat-whole-5',
                        name: 'Whole Goat (Cleaned)',
                        description: 'Whole goat, cleaned and ready for butchering',
                        image_url: '/images/menu/goat-whole-cleaned-1.jpg'
                    },
                    {
                        id: 'goat-whole-6',
                        name: 'Whole Goat (Festive Pack)',
                        description: 'Festive pack whole goat selection',
                        image_url: '/images/menu/goat-whole-festive-1.jpg'
                    }
                ]
            },
            {
                id: 'goat-boneless',
                name: 'Boneless Goat',
                icon: '/icons/goat.svg',
                items: [
                    {
                        id: 'goat-boneless-1',
                        name: 'Boneless Goat Cubes',
                        description: 'Boneless goat cubes for curry and stew',
                        image_url: '/images/menu/goat-boneless-cubes-1.jpg'
                    },
                    {
                        id: 'goat-boneless-2',
                        name: 'Boneless Goat (Biryani Cut)',
                        description: 'Boneless pieces ideal for biryani',
                        image_url: '/images/menu/goat-boneless-biryani-1.jpg'
                    },
                    {
                        id: 'goat-boneless-3',
                        name: 'Boneless Goat (Lean)',
                        description: 'Lean boneless goat, trimmed',
                        image_url: '/images/menu/goat-boneless-lean-1.jpg'
                    },
                    {
                        id: 'goat-boneless-4',
                        name: 'Boneless Goat (Premium)',
                        description: 'Premium boneless goat selection',
                        image_url: '/images/menu/goat-boneless-premium-1.jpg'
                    }
                ]
            },
            {
                id: 'goat-offal',
                name: 'Goat Offal',
                icon: '/icons/goat.svg',
                items: [
                    {
                        id: 'goat-offal-1',
                        name: 'Goat Liver',
                        description: 'Fresh goat liver, perfect for fry',
                        image_url: '/images/menu/goat-liver-1.jpg'
                    },
                    {
                        id: 'goat-offal-2',
                        name: 'Goat Kidney',
                        description: 'Goat kidney, cleaned and ready',
                        image_url: '/images/menu/goat-kidney-1.jpg'
                    },
                    {
                        id: 'goat-offal-3',
                        name: 'Goat Heart',
                        description: 'Fresh goat heart for curry or grill',
                        image_url: '/images/menu/goat-heart-1.jpg'
                    },
                    {
                        id: 'goat-offal-4',
                        name: 'Goat Tripe',
                        description: 'Cleaned goat tripe for traditional dishes',
                        image_url: '/images/menu/goat-tripe-1.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 'deer-meat',
        name: 'Deer Meat',
        icon_url: '/icons/deer-meat.svg',
        types: [
            {
                id: 'deer-steaks',
                name: 'Venison Steaks',
                icon: '/icons/deer-meat.svg',
                items: [
                    {
                        id: 'deer-steak-1',
                        name: 'Venison Steak (Loin)',
                        description: 'Lean venison loin steaks, tender and flavorful',
                        image_url: '/images/menu/deer-steak-loin-1.jpg'
                    },
                    {
                        id: 'deer-steak-2',
                        name: 'Venison Steak (Ribeye)',
                        description: 'Juicy ribeye-cut venison steaks',
                        image_url: '/images/menu/deer-steak-ribeye-1.jpg'
                    },
                    {
                        id: 'deer-steak-3',
                        name: 'Venison Steak (Sirloin)',
                        description: 'Lean sirloin steaks, ideal for grilling',
                        image_url: '/images/menu/deer-steak-sirloin-1.jpg'
                    },
                    {
                        id: 'deer-steak-4',
                        name: 'Venison Steak (Marinated)',
                        description: 'Pre-marinated venison steaks, ready to cook',
                        image_url: '/images/menu/deer-steak-marinated-1.jpg'
                    }
                ]
            },
            {
                id: 'deer-cuts',
                name: 'Venison Cuts',
                icon: '/icons/deer-meat.svg',
                items: [
                    {
                        id: 'deer-cut-1',
                        name: 'Venison Shoulder',
                        description: 'Slow-cook venison shoulder cuts',
                        image_url: '/images/menu/deer-shoulder-1.jpg'
                    },
                    {
                        id: 'deer-cut-2',
                        name: 'Venison Leg Roast',
                        description: 'Whole leg roast, perfect for roasting',
                        image_url: '/images/menu/deer-leg-1.jpg'
                    },
                    {
                        id: 'deer-cut-3',
                        name: 'Venison Ribs',
                        description: 'Meaty ribs for slow cooking or BBQ',
                        image_url: '/images/menu/deer-ribs-1.jpg'
                    },
                    {
                        id: 'deer-cut-4',
                        name: 'Venison Shank',
                        description: 'Rich shanks, ideal for braising',
                        image_url: '/images/menu/deer-shank-1.jpg'
                    }
                ]
            },
            {
                id: 'deer-mince',
                name: 'Venison Mince',
                icon: '/icons/deer-meat.svg',
                items: [
                    {
                        id: 'deer-mince-1',
                        name: 'Venison Mince (Lean)',
                        description: 'Lean ground venison for kebabs and burgers',
                        image_url: '/images/menu/deer-mince-lean-1.jpg'
                    },
                    {
                        id: 'deer-mince-2',
                        name: 'Venison Mince (Premium)',
                        description: 'Premium mince with balanced texture',
                        image_url: '/images/menu/deer-mince-premium-1.jpg'
                    },
                    {
                        id: 'deer-mince-3',
                        name: 'Venison Kofta Mix',
                        description: 'Seasoned venison mince blend for koftas',
                        image_url: '/images/menu/deer-mince-kofta-1.jpg'
                    },
                    {
                        id: 'deer-mince-4',
                        name: 'Venison Mince (Family Pack)',
                        description: 'Value pack mince for meal prep',
                        image_url: '/images/menu/deer-mince-family-1.jpg'
                    }
                ]
            },
            {
                id: 'deer-specials',
                name: 'Specials',
                icon: '/icons/deer-meat.svg',
                items: [
                    {
                        id: 'deer-special-1',
                        name: 'Venison Curry Cut',
                        description: 'Bone-in curry cut, perfect for slow curry',
                        image_url: '/images/menu/deer-curry-cut-1.jpg'
                    },
                    {
                        id: 'deer-special-2',
                        name: 'Venison Bones (Stock)',
                        description: 'Bones for rich broth and stock',
                        image_url: '/images/menu/deer-bones-1.jpg'
                    },
                    {
                        id: 'deer-special-3',
                        name: 'Venison Liver',
                        description: 'Fresh venison liver, high in iron',
                        image_url: '/images/menu/deer-liver-1.jpg'
                    },
                    {
                        id: 'deer-special-4',
                        name: 'Venison Heart',
                        description: 'Fresh heart, great for grilling or curry',
                        image_url: '/images/menu/deer-heart-1.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 'fish',
        name: 'Fish',
        icon_url: '/icons/fish.png',
        types: [
            {
                id: 'fish-whole',
                name: 'Whole Fish',
                icon: '/icons/fish.png',
                items: [
                    {
                        id: 'fish-whole-1',
                        name: 'Tilapia (Whole)',
                        description: 'Fresh whole tilapia, cleaned and ready',
                        image_url: '/images/menu/fish-tilapia-whole-1.jpg'
                    },
                    {
                        id: 'fish-whole-2',
                        name: 'Rohu (Whole)',
                        description: 'Whole rohu fish, ideal for curry',
                        image_url: '/images/menu/fish-rohu-whole-1.jpg'
                    },
                    {
                        id: 'fish-whole-3',
                        name: 'Pomfret (Whole)',
                        description: 'Whole pomfret, great for frying',
                        image_url: '/images/menu/fish-pomfret-whole-1.jpg'
                    },
                    {
                        id: 'fish-whole-4',
                        name: 'Sea Bass (Whole)',
                        description: 'Whole sea bass, perfect for baking',
                        image_url: '/images/menu/fish-seabass-whole-1.jpg'
                    }
                ]
            },
            {
                id: 'fish-fillet',
                name: 'Fillets',
                icon: '/icons/fish.png',
                items: [
                    {
                        id: 'fish-fillet-1',
                        name: 'Salmon Fillet',
                        description: 'Boneless salmon fillets',
                        image_url: '/images/menu/fish-salmon-fillet-1.jpg'
                    },
                    {
                        id: 'fish-fillet-2',
                        name: 'Cod Fillet',
                        description: 'Mild cod fillets, great for grilling',
                        image_url: '/images/menu/fish-cod-fillet-1.jpg'
                    },
                    {
                        id: 'fish-fillet-3',
                        name: 'Tilapia Fillet',
                        description: 'Skinless tilapia fillets',
                        image_url: '/images/menu/fish-tilapia-fillet-1.jpg'
                    },
                    {
                        id: 'fish-fillet-4',
                        name: 'Basa Fillet',
                        description: 'Soft basa fillets, quick to cook',
                        image_url: '/images/menu/fish-basa-fillet-1.jpg'
                    }
                ]
            },
            {
                id: 'fish-shellfish',
                name: 'Prawns & Shellfish',
                icon: '/icons/fish.png',
                items: [
                    {
                        id: 'fish-shellfish-1',
                        name: 'Prawns (Cleaned)',
                        description: 'Cleaned prawns, ready to cook',
                        image_url: '/images/menu/fish-prawns-cleaned-1.jpg'
                    },
                    {
                        id: 'fish-shellfish-2',
                        name: 'Prawns (Jumbo)',
                        description: 'Jumbo prawns for grill and fry',
                        image_url: '/images/menu/fish-prawns-jumbo-1.jpg'
                    },
                    {
                        id: 'fish-shellfish-3',
                        name: 'Squid Rings',
                        description: 'Tender squid rings, perfect for frying',
                        image_url: '/images/menu/fish-squid-rings-1.jpg'
                    },
                    {
                        id: 'fish-shellfish-4',
                        name: 'Mussels',
                        description: 'Fresh mussels for curries and soups',
                        image_url: '/images/menu/fish-mussels-1.jpg'
                    }
                ]
            },
            {
                id: 'fish-ready',
                name: 'Ready To Cook',
                icon: '/icons/fish.png',
                items: [
                    {
                        id: 'fish-ready-1',
                        name: 'Fish Curry Cut (Rohu)',
                        description: 'Curry-cut pieces, perfect for fish curry',
                        image_url: '/images/menu/fish-rohu-curry-cut-1.jpg'
                    },
                    {
                        id: 'fish-ready-2',
                        name: 'Marinated Fish (Tandoori)',
                        description: 'Spice-marinated fish pieces, ready to grill',
                        image_url: '/images/menu/fish-marinated-tandoori-1.jpg'
                    },
                    {
                        id: 'fish-ready-3',
                        name: 'Fish Fry Cut (Pomfret)',
                        description: 'Fry-cut pieces for crispy fish fry',
                        image_url: '/images/menu/fish-pomfret-fry-cut-1.jpg'
                    },
                    {
                        id: 'fish-ready-4',
                        name: 'Seafood Mix',
                        description: 'Mixed seafood for pasta, stir fry, and soups',
                        image_url: '/images/menu/fish-seafood-mix-1.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 'sausage-soup',
        name: 'Sausage & Soup',
        icon_url: '/icons/sausage.png',
        types: [
            {
                id: 'sausage',
                name: 'Sausages',
                icon: '/icons/sausage.png',
                items: [
                    {
                        id: 'sausage-1',
                        name: 'Chicken Sausage (Classic)',
                        description: 'Classic seasoned chicken sausages',
                        image_url: '/images/menu/sausage-chicken-classic-1.jpg'
                    },
                    {
                        id: 'sausage-2',
                        name: 'Beef Sausage (Smoked)',
                        description: 'Smoked beef sausages with deep flavor',
                        image_url: '/images/menu/sausage-beef-smoked-1.jpg'
                    },
                    {
                        id: 'sausage-3',
                        name: 'Mutton Sausage (Spicy)',
                        description: 'Spicy mutton sausages, great for grills',
                        image_url: '/images/menu/sausage-mutton-spicy-1.jpg'
                    },
                    {
                        id: 'sausage-4',
                        name: 'Lamb Sausage (Herb)',
                        description: 'Herb-seasoned lamb sausages',
                        image_url: '/images/menu/sausage-lamb-herb-1.jpg'
                    }
                ]
            },
            {
                id: 'soup',
                name: 'Soups',
                icon: '/icons/sausage.png',
                items: [
                    {
                        id: 'soup-1',
                        name: 'Chicken Corn Soup',
                        description: 'Comforting chicken and sweet corn soup',
                        image_url: '/images/menu/soup-chicken-corn-1.jpg'
                    },
                    {
                        id: 'soup-2',
                        name: 'Mutton Shorba',
                        description: 'Traditional spiced mutton shorba',
                        image_url: '/images/menu/soup-mutton-shorba-1.jpg'
                    },
                    {
                        id: 'soup-3',
                        name: 'Beef Bone Broth',
                        description: 'Slow-cooked beef bone broth',
                        image_url: '/images/menu/soup-beef-bone-broth-1.jpg'
                    },
                    {
                        id: 'soup-4',
                        name: 'Tom Yum Seafood Soup',
                        description: 'Tangy tom yum soup with mixed seafood',
                        image_url: '/images/menu/soup-tom-yum-seafood-1.jpg'
                    }
                ]
            },
            {
                id: 'marinated-sausage',
                name: 'Marinated',
                icon: '/icons/sausage.png',
                items: [
                    {
                        id: 'marinated-sausage-1',
                        name: 'Tandoori Chicken Sausage',
                        description: 'Tandoori-marinated sausages, ready to grill',
                        image_url: '/images/menu/sausage-chicken-tandoori-1.jpg'
                    },
                    {
                        id: 'marinated-sausage-2',
                        name: 'Peri Peri Beef Sausage',
                        description: 'Peri peri marinated beef sausages',
                        image_url: '/images/menu/sausage-beef-peri-peri-1.jpg'
                    },
                    {
                        id: 'marinated-sausage-3',
                        name: 'Spicy Lamb Sausage',
                        description: 'Chilli-spiced lamb sausages',
                        image_url: '/images/menu/sausage-lamb-spicy-1.jpg'
                    },
                    {
                        id: 'marinated-sausage-4',
                        name: 'BBQ Chicken Sausage',
                        description: 'BBQ flavored chicken sausages',
                        image_url: '/images/menu/sausage-chicken-bbq-1.jpg'
                    }
                ]
            },
            {
                id: 'broth',
                name: 'Broth & Stock',
                icon: '/icons/sausage.png',
                items: [
                    {
                        id: 'broth-1',
                        name: 'Chicken Stock',
                        description: 'Rich chicken stock for soups and gravies',
                        image_url: '/images/menu/broth-chicken-stock-1.jpg'
                    },
                    {
                        id: 'broth-2',
                        name: 'Mutton Stock',
                        description: 'Slow-simmered mutton stock',
                        image_url: '/images/menu/broth-mutton-stock-1.jpg'
                    },
                    {
                        id: 'broth-3',
                        name: 'Beef Stock',
                        description: 'Deep flavored beef stock',
                        image_url: '/images/menu/broth-beef-stock-1.jpg'
                    },
                    {
                        id: 'broth-4',
                        name: 'Fish Stock',
                        description: 'Light fish stock for seafood soups',
                        image_url: '/images/menu/broth-fish-stock-1.jpg'
                    }
                ]
            }
        ]
    },
];
