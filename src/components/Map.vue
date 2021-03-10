<template>
    <div v-if="center" style="height: 32rem">
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
            zoom: 12,
            bounds: null,
        };
    },
    props: {
        suppliers: Array,
        center: Array,
    }
};
</script>