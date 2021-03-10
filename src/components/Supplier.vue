<template>
    <section
        :class="status ? 'frame frame-ok' : 'frame frame-ko'"
        @click="() => onSupplierClick(id)"
    >
        <h3>{{ name }}</h3>
        <h4 :class="status ? 'stock-ok' : 'stock-ko'">A du stock : {{ status ? 'OK' : 'KO' }}</h4>
        <p>Date de dernière relevé des stocks : {{ format(checkedAt, 'fr-FR') }}</p>
    </section>
</template>

<script>
import { format } from 'timeago.js';

export default {
    name: "Supplier",
    props: {
        id: String,
        name: String,
        status: Boolean,
        checkedAt: Date,
        onSupplierClick: Function,
    },
    methods: {
        format
    }
}
</script>

<style scoped>
.stock-ok {
    color: darkolivegreen;
}

.stock-ko {
    color: red;
}

.frame {
    border: 1px solid lightgray;
    border-radius: 6px;
    margin: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.frame-ok {
    background: #e9fae2
}

.frame-ko {
    background: #ffeeea;
}

</style>