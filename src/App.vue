<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <button @click="onSuppliersListClick">Suppliers</button>
            <button @click="onMapClick">Map</button>
        </div>
        <SuppliersList />
        <SuppliersMap />
    </div>
</template>

<script>
import SuppliersList from "@/components/SuppliersList";
import SuppliersMap from "@/components/SuppliersMap";
export default {
    name: 'App',
    components: {SuppliersMap, SuppliersList},
    methods: {
        onSuppliersListClick() {alert('cool')},
        onMapClick() {alert('sympa')}
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
