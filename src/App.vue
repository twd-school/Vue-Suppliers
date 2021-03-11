<template>
    <div id="app">
        <img id="logo" alt="Vue logo" src="./assets/logo.png">
        <div>
            <router-link to="/suppliers">
                <button class="btn">Suppliers</button>
            </router-link>
            <router-link to="/map">
                <button class="btn btn-variant">Map</button>
            </router-link>
            <router-link to="/add-supplier">
                <button class="btn">Add supplier</button>
            </router-link>
        </div>
        <router-view
            :suppliers="suppliers"
            :center="center"
            :selected-supplier="selectedSupplier"
            :onSupplierClick="onSupplierClick"
        />
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
        },
        onSupplierClick(id) {
            this.selectedSupplier = this.suppliers.find(supplier => supplier.id === id);
            this.$router.push('/edit-supplier');
        }
    },
    data() {
        return {
            suppliers: [],
            loading: true,
            error: null,
            geo: null,
            center: null,
            selectedSupplier: null
        }
    },
    created() {
        this.getSuppliers();
        navigator.geolocation.getCurrentPosition((geo) => {
            this.geo = geo;
            const { latitude, longitude } = this.geo.coords;
            this.center = [latitude.toFixed(2), longitude.toFixed(2)];
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

#logo:hover {
    animation: jump 0.4s ease-in-out;
}

@keyframes jump {
    from {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3rem);
    }

    to {
        transform: translateY(0);
    }
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
.form-control > select {
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
