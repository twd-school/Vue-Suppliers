<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <Map :suppliers="suppliers"/>
    </div>
</template>

<script>
import Map from "@/components/Map";
export default {
    name: "SuppliersMap",
    components: {Map},
    props: {
        suppliers: Array
    }
}
</script>

<style scoped>

</style>