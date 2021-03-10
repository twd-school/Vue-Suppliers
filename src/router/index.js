import VueRouter from "vue-router";

import SuppliersList from "@/components/SuppliersList";
import SuppliersMap from "@/components/SuppliersMap";
import AddSupplier from "@/components/AddSupplier";
import EditSupplier from "@/components/EditSupplier";

const router = new VueRouter({
    routes : [
        { path: '/suppliers', component: SuppliersList },
        { path: '/map', component: SuppliersMap },
        { path: '/add-supplier', component: AddSupplier },
        { path: '/edit-supplier', component: EditSupplier }
    ]
})

export default router;