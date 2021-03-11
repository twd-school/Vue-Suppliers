import { nanoid } from 'nanoid';

const storeObj = {
    state: {
        suppliers: [],
        loading: true,
        message: { text: '', type: 'success', lifetime: 0 },
        geo: null,
        center: null,
        selectedSupplier: null
    },
    mutations: {
        setSuppliers(state, data) {
            state.suppliers = data;
        },
        setLoading(state, isLoading) {
            state.loading = isLoading;
        },
        setMessage(state, message) {
            state.message = {...message, key: nanoid()};
        },
        setGeo(state, geo) {
            state.geo = geo;
        },
        setCenter(state, center) {
            state.center = center;
        },
        setSelectedSupplier(state, supplier) {
            state.selectedSupplier = supplier;
        }
    }
};

export default storeObj;