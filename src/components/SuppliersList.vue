<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <Supplier
            v-for="{ id, name, status, checkedAt } of suppliers"
            v-bind:key="id"
            :name="name"
            :status="status"
            :checked-at="new Date(checkedAt)"
        />
    </div>
</template>

<script>
import Supplier from "@/components/Supplier";

export default {
    name: "SuppliersList",
    components: {Supplier},
    props: {
        suppliers: Array
    }
}
</script>

<style scoped>

</style>