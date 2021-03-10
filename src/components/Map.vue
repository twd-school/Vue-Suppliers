<template>
    <div style="height: 80vh">
        <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url"></LTileLayer>
            <LMarker
                v-for="{id, latitude, longitude} of suppliers"
                v-bind:key="id"
                :lat-lng="[parseFloat(latitude), parseFloat(longitude)]"
            />
        </LMap>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
            zoom: 6,
            center: [46.5322, 2.9482],
            bounds: null,
        };
    },
    props: {
        suppliers: Array
    }
};
</script>