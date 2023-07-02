import ListDepotArticle from "@/pages/app/DepotArticle/ListDepotArticle.vue"
import AddDepotArticle from "@/pages/app/DepotArticle/AddDepotArticle.vue"

export default {
    path: "/depots",
    name: "DepotArticle",
    meta: {
        belongs: 'app',
        icon: 'fa fa-gift',
        label: "DepotArticle"
    },
    children: [
        {
            path: "",
            name: "list-Depot-article",
            component: ListDepotArticle,
            meta: {
                icon: 'fa fa-list',
                label: 'Liste des DepotArticles'
            }
        },
        {
            path: "add",
            name: "add-Depot-article",
            component: AddDepotArticle,
            meta: {
                icon: 'fa fa-cart-plus',
                label: 'Ajout d\'DepotArticle'
            }
        }
    ]
};