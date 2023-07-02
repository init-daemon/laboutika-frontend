import ListArticle from "@/pages/app/Article/ListArticle.vue"
import AddArticle from "@/pages/app/Article/AddArticle.vue"

export default {
    path: "/article",
    name: "Article",
    meta: {
        belongs: 'app',
        icon: 'fa fa-gift',
        label: "Article"
    },
    children: [
        {
            path: "",
            name: "list-article",
            component: ListArticle,
            meta: {
                icon: 'fa fa-list',
                label: 'Liste des articles'
            }
        },
        {
            path: "add",
            name: "add-article",
            component: AddArticle,
            meta: {
                icon: 'fa fa-cart-plus',
                label: 'Ajout d\'article'
            }
        }
    ]
};