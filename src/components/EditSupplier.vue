<template>
    <div>
        <h1>Modifier un fournisseur</h1>
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
            <button type="submit" class="btn btn-small">Modifier</button>
            <button class="btn btn-variant btn-small" @click="onDeleteClick">Supprimer</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "EditSupplier",
    data() {
        const { id, name, checkedAt, status, latitude, longitude } = this.$store.state.selectedSupplier;
        return {
            message: null,
            id,
            name,
            checkedAt: new Date(checkedAt).toISOString(),
            status,
            latitude,
            longitude
        }
    },
    methods: {
        async onFormSubmit(e) {
            e.preventDefault();
            try {
                const { id, name, checkedAt, status, latitude, longitude } = this;
                const res = await axios.put(`https://api-suppliers.herokuapp.com/api/suppliers/${id}`, {
                    name,
                    checkedAt,
                    status,
                    latitude,
                    longitude
                });
                if (res.data?.id) {
                    this.$store.commit('setSuppliers', this.$store.state.suppliers.map(supplier => {
                        if (supplier.id === this.id) {
                            supplier.name = this.name;
                            supplier.checkedAt = this.checkedAt;
                            supplier.status = this.status;
                            supplier.latitude = this.latitude;
                            supplier.longitude = this.longitude;
                        }
                        return supplier;
                    }));
                    this.$store.commit('setMessage', {
                        text: 'Fournisseur modifié',
                        type: 'success',
                        lifetime: 5000
                    });
                    await this.$router.push('/suppliers');
                } else {
                    this.viewError('Une erreur inconnue est survenue');
                }
            } catch (e) {
                this.viewError(e);
            }
        },
        async onDeleteClick(e) {
            e.preventDefault();
            try {
                await axios.delete(`https://api-suppliers.herokuapp.com/api/suppliers/${this.id}`);
                this.$store.commit('setSuppliers', this.$store.state.suppliers.filter(supplier => supplier.id !== this.id));
                this.$store.commit('setMessage', {
                    text: 'Fournisseur supprimé',
                    type: 'success',
                    lifetime: 5000
                })
                await this.$router.push('/suppliers');
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
    },
}
</script>

<style scoped>

</style>