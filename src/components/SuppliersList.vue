<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier
            v-for="{ id, name, status, checkedAt } of suppliers"
            v-bind:key="id"
            :name="name"
            :status="status"
            :checked-at="checkedAt"
        />
    </div>
</template>

<script>
import Supplier from "@/components/Supplier";

export default {
    name: "SuppliersList",
    components: {Supplier},
    data() {
        return {
            suppliers: [
                {
                    id: 1,
                    name: "Fournisseur 1 ?",
                    status: true,
                    checkedAt: new Date()
                },
                {
                    id: 2,
                    name: "Fournisseur 2",
                    status: false,
                    checkedAt: new Date()
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>