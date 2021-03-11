<template>
    <div>
        <h1>Liste des fournisseurs</h1>
        <div class="form-control">
            <label for="filter">Filter </label>
            <select id="filter" v-model="filter" style="width: fit-content">
                <option selected>*</option>
                <option>OK</option>
                <option>KO</option>
            </select>
        </div>
        <Supplier
            v-for="{ id, name, status, checkedAt } of this.handleFilters(this.suppliers, this.filter)"
            v-bind:key="id"
            :id="id"
            :name="name"
            :status="status"
            :checked-at="new Date(checkedAt)"
            :on-supplier-click="onSupplierClick"
        />
    </div>
</template>

<script>
import Supplier from "@/components/Supplier";

export default {
    name: "SuppliersList",
    components: {Supplier},
    props: {
        suppliers: Array,
        onSupplierClick: Function
    },
    data() {
        return {
            filter: '*',
        }
    },
    methods: {
        handleFilters(suppliers, filter) {
            switch (filter) {
                case '*':
                    return suppliers;
                case 'OK':
                    return suppliers.filter(supplier => supplier.status);
                case 'KO':
                    return suppliers.filter(supplier => !supplier.status);
                default:
                    return suppliers;
            }
        }
    }
}
</script>

<style scoped>

</style>