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
                <datetime
                    id="checked-at"
                    type="datetime"
                    v-model="checkedAt"
                    input-class="form-input"
                    :phrases="{ok: 'Ok', cancel: 'Annuler'}"
                />
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
            <button type="submit" class="btn btn-small">Valider</button>
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
            checkedAt: new Date().toISOString(),
            status: true,
            latitude: null,
            longitude: null,
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
                if (res.data?.id) {
                    this.$store.commit('setMessage', {
                        text: 'Nouveau fournisseur ajouté',
                        type: 'success',
                        lifetime: 5000
                    })
                    this.$store.commit('setSuppliers', [res.data, ...this.$store.state.suppliers]);
                    await this.$router.push('/suppliers');
                } else {
                    this.viewError('Une erreur inconnue est survenue');
                }
            } catch (e) {
                this.viewError(e);
            }
        },
        viewError(e) {
            this.$store.commit('setMessage', {
                text: e,
                type: 'error',
                lifetime: 5000
            })
        }
    }
}
</script>

<style scoped>
</style>