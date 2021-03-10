<template>
    <div>
        <h1>Modifier un fournisseur</h1>
        <form class="form" @submit="onFormSubmit">
            <div class="form-control">
                <label for="name">Nom : </label>
                <input type="text" id="name" v-model="selectedSupplier.name"/>
            </div>
            <div class="form-control">
                <label for="checked-at">Vérifié à : </label>
                <input type="datetime-local" id="checked-at" v-model="checkedAtFormatted" />
            </div>
            <div class="form-control">
                <label for="status">Stock : </label>
                <select id="status" v-model="selectedSupplier.status">
                    <option value="true" selected>OK</option>
                    <option value="false">KO</option>
                </select>
            </div>
            <div class="form-control">
                <label for="latitude">Latitude : </label>
                <input type="number" id="latitude" step="0.01" v-model="selectedSupplier.latitude" />
            </div>
            <div class="form-control" style="margin-bottom: 2rem">
                <label for="longitude">Longitude : </label>
                <input type="number" id="longitude" step="0.01" v-model="selectedSupplier.longitude" />
            </div>
            <p v-if="message">{{ message }}</p>
            <button type="submit" class="btn">Modifier</button>
            <button class="btn btn-variant" @click="onDeleteClick">Supprimer</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "EditSupplier",
    data() {
        return {
            message: '',
            checkedAtFormatted: new Date(this.$props.selectedSupplier.checkedAt).toISOString()
        }
    },
    methods: {
        async onFormSubmit(e) {
            e.preventDefault();
            try {
                const { name, status, latitude, longitude } = this.$props.selectedSupplier;
                const res = await axios.put(`https://api-suppliers.herokuapp.com/api/suppliers/${this.$props.selectedSupplier.id}`, {
                    name,
                    checkedAt: this.checkedAtFormatted,
                    status,
                    latitude,
                    longitude
                });
                this.message = res.data;
                return res;
            } catch (e) {
                this.message = e;
            }
        },
        async onDeleteClick(e) {
            e.preventDefault();
            try {
                const res = await axios.delete(`https://api-suppliers.herokuapp.com/api/suppliers/${this.$props.selectedSupplier.id}`);
                this.message = res.data;
            } catch (e) {
                this.message = e;
            }
        }
    },
    props: { selectedSupplier: Object }
}
</script>

<style scoped>

</style>