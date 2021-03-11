<template>
    <div>
        <h1>Ajouter un fournisseur</h1>
        <form class="form" @submit="onFormSubmit">
            <div class="form-control">
                <label for="name">Nom : </label>
                <input type="text" id="name" v-model="name"/>
            </div>
            <div class="form-control">
                <label for="checked-at">Vérifié à : </label>
                <input type="datetime-local" id="checked-at" v-model="checkedAt" />
            </div>
            <div class="form-control">
                <label for="status">Stock : </label>
                <select id="status" v-model="status">
                    <option value="true" selected>OK</option>
                    <option value="false">KO</option>
                </select>
            </div>
            <div class="form-control">
                <label for="latitude">Latitude : </label>
                <input type="number" id="latitude" step="0.01" v-model="latitude" />
            </div>
            <div class="form-control" style="margin-bottom: 2rem">
                <label for="longitude">Longitude : </label>
                <input type="number" id="longitude" step="0.01" v-model="longitude" />
            </div>
            <p v-if="message">{{ message }}</p>
            <button type="submit" class="btn">Valider</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AddSupplier",
    data() {
        return {
            name: '',
            checkedAt: '',
            status: true,
            latitude: null,
            longitude: null,
            message: null,
        }
    },
    methods: {
        async onFormSubmit(e) {
            e.preventDefault();
            try {
                const res = await axios.post(
                    'https://api-suppliers.herokuapp.com/api/suppliers',
                    {
                        name: this.name,
                        checkedAt: new Date(this.checkedAt).toLocaleString(),
                        status: this.status,
                        latitude: this.latitude,
                        longitude: this.longitude
                    });
                this.message = res.data;
                this.name = '';
                this.checkedAt = '';
                this.status = true;
                this.latitude = null;
                this.longitude = null;
            } catch (e) {
                this.message = e;
            }
        }
    }
}
</script>

<style scoped>
</style>