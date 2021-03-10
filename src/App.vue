<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <router-link to="/suppliers">
                <button>Suppliers</button>
            </router-link>
            <router-link to="/map">
                <button>Map</button>
            </router-link>
        </div>
        <router-view :suppliers="suppliers"/>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
        async getSuppliers() {
            try {
                const res = await axios.get('https://api-suppliers.herokuapp.com/api/suppliers');
                this.suppliers = res.data;
                this.loading = false;
            } catch (e) {
                this.error = e;
                this.loading = false;
            }
        }
    },
    data() {
        return {
            suppliers: [],
            loading: true,
            error: null,
        }
    },
    created() {
        this.getSuppliers();
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
