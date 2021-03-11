<template>
    <div id="app">
        <nav>
            <router-link to="/suppliers">
                <button class="btn">Liste</button>
            </router-link>
            <router-link to="/map">
                <button class="btn btn-variant">Carte</button>
            </router-link>
            <router-link to="/add-supplier">
                <button class="btn">Ajouter un fournisseur</button>
            </router-link>
        </nav>
        <router-view/>
        <Alert
            v-if="this.$store.state.message"
            v-bind:key="this.$store.state.message.key"
            :lifetime="this.$store.state.message.lifetime"
            :message="this.$store.state.message.text"
            :type="this.$store.state.message.type"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Alert from '@/components/Alert';
export default {
    name: 'App',
    components: { Alert },
    methods: {
        async getSuppliers() {
            try {
                const res = await axios.get('https://api-suppliers.herokuapp.com/api/suppliers');
                this.$store.commit('setSuppliers', res.data);
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        },
    },
    created() {
        this.getSuppliers();
        navigator.geolocation.getCurrentPosition((geo) => {
            this.$store.commit('setGeo', geo);
            const { latitude, longitude } = geo.coords;
            this.$store.commit('setCenter', [latitude.toFixed(2), longitude.toFixed(2)]);
        },
        (error) => {
            console.error(error);
        });
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.btn {
    padding: 0.75rem;
    outline: none;
    border: none;
    color: #fff;
    background: #41b883;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 150ms;
}

.btn:hover {
    background: #279866;
}

.btn-variant {
    background: #35495e;
}

.btn-variant:hover {
    background: #1d2a39;
}

.btn-small {
    font-size: 0.9rem;
}

.form-control {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.75rem 0;
}

.form-control > label {
    width: 50%;
    text-align: right;
    margin-right: 0.5rem;
}

.form-control > input,
.form-control > select,
.form-input {
    border: 1px solid #e5e5e5;
    padding: 0.4rem;
    background: #fff;
    width: 12rem;
    margin: 0;
    outline: none;
    border-radius: 3px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.form-control > input:focus,
.form-control > select:focus {
    border: 1px solid darkgray;
}

.form {
    margin: 2rem 0;
}

</style>
