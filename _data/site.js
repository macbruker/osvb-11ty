export default {
    title: 'Oslo Sandvolleyballklubb',
    description: 'Oslo Sandvolleyballklubb organiserer turneringer og treninger for nybegynnere, etablerte og proffe spillere som vil ha et morsomt og sosialt forhold til sandvolleyball.',
    menu: [
        {
            title: 'Kalender',
            description: 'Alle kommende arrangementer',
            url: '/kalender/'
        },
        {
            title: 'Ukeplan',
            description: 'Oversikt over faste aktiviteter',
            url: '/ukeplan/'
        },
        {
            title: 'Treninger',
            description: 'Grupper, nivåer, priser',
            url: '/treninger/'
        },
        {
            title: 'Booking',
            description: 'Retningslinjer og priser for baneleie',
            url: '/booking/'
        },
        {
            title: 'Turneringsinfo',
            description: 'Formater, lisenser og regler',
            url: '/turneringer/'
        },
        {
            title: 'Om klubben',
            description: 'Historien, styret og kontaktpersoner',
            url: '/om-klubben/'
        }
    ],
    year: new Date().getFullYear(),
    weekday: new Intl.DateTimeFormat("no-NB", { weekday: "long" }).format(new Date()),
    daynumber: new Date().getDay()
}