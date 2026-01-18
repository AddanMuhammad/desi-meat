interface orderCard {
    title: string;
    description: string;
    icon_url: string
}


export const orderCardData: orderCard[] = [
        {
            title: 'Choose Your Purpose',
            description: 'Select a series based on family meals, fitness goals, or bulk ordering needs.',
            icon_url: '/icons/purpose.svg',
        },
        {
            title: 'Pick Protein & Cut',
            description: 'Choose your preferred chicken cut, freshly trimmed and prepared.',
            icon_url: '/icons/pick.svg',
        },
        {
            title: 'Customize Your Flavour',
            description: 'Select your marinade and spice level — Hot, Medium, or Non-Spicy.',
            icon_url: '/icons/customize.svg',
        },
        {
            title: 'Add Extras & Checkout',
            description: 'Add sauces or bulk packs, choose quantity, and place your order easily.',
            icon_url: '/icons/checkout.svg',
        },
];