import VueRouter from "vue-router";

import SuppliersList from "@/components/SuppliersList";
import SuppliersMap from "@/components/SuppliersMap";
import Supplier from "@/components/Supplier";

const router = new VueRouter({
    routes : [
        { path: '/suppliers', component: SuppliersList },
        { path: '/map', component: SuppliersMap },
        { path: '/supplier', component: Supplier }
    ]
})

export default router;