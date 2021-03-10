<template>
    <section class="frame">
        <h3>{{ name }}</h3>
        <h4 :class="status ? 'ok' : 'ko'">A du stock : {{ status ? 'OK' : 'KO' }}</h4>
        <p>Date de dernière relevé des stocks : {{ checkedAt.toLocaleString() }}</p>
    </section>
</template>

<script>
export default {
    name: "Supplier",
    props: {
        name: String,
        status: Boolean,
        checkedAt: Date
    },
}
</script>

<style scoped>
.ok {
    color: darkolivegreen;
}

.ko {
    color: red;
}

.frame {
    border: 2px solid darkslategray;
    margin: 1rem;
}
</style>