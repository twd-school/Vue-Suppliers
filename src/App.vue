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
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
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
