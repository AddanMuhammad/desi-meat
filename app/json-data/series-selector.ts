interface SeriesSelectorCard {
    title: string;
    description: string;
    button: {
        text: string;
        isGradient: boolean;
        isPrimary: boolean;
    };
    img_url: string;
}


export const dummyCardData: SeriesSelectorCard[] = [
        {
            title: 'FIT',
            description: 'For Gym & Clean Eating',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/series-1.svg',
        },
        {
            title: 'BALANCE',
            description: 'For Everyday Family Meds',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/series-2.svg',
        },
        {
            title: 'FEAST',
            description: 'For BBQs & Gathering',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/series-3.svg',
        },

];