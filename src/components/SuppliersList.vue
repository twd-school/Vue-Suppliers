<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier
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
            name: 'Mon fournisseur',
            status: false,
            checkedAt: new Date
        }
    }
}
</script>

<style scoped>

</style>