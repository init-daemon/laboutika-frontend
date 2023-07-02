import ArticleRoute from "./app/ArticleRoute"
import DepotArticleRoute from "./app/DepotArticleRoute"
import DashboardIndex from "@/pages/app/Dashboard/DasboardIndex.vue"

const routes: Array<any> = [
    ArticleRoute,
    DepotArticleRoute,
    {
        path: "/",
        component: DashboardIndex,
        name: "Dashboard"
    }
];

export default routes;