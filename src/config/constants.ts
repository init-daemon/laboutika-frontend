export const appNavs = [
    {
        icon: "fa fa-tachometer-alt",
        label: "Dashboard",
        path: "/"
    },
    {
        icon: 'fa fa-gift',
        label: "Article",
        children: [
            {
                path: "/article/",
                icon: 'fa fa-list',
                label: "Mes articles"
            },
            {
                path: "/article/add/",
                icon: 'fa fa-plus-circle',
                label: "Ajout d'article"
            },
        ]
    },
    {
        icon: 'fa fa-box-open',
        label: "Dépôt",
        children: [
            {
                path: "/depots/",
                icon: 'fa fa-list',
                label: "Mes dépôts"
            },
            {
                path: "/depots/add/",
                icon: 'fa fa-plus-circle',
                label: "Mise en dépôt"
            },
        ]
    },
];