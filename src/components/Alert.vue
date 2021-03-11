<template>
    <div
        class="alert"
        :style="{animation: `popIn ${lifetime}ms ease-in-out`, background: type === 'error' ? '#bf3d3d' : '#41b883'}"
    >
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "Alert",
    props: {
        type: { type: String, default: 'success' },
        message: { type: String, required: true },
        lifetime: { Number, default: 0 }
    },
}
</script>

<style>
    .alert {
        color: #fff;
        transform: scale(0);
        position: fixed;
        bottom: 0;
        width: calc(100% - 4rem);
        margin: 2rem;
        padding: 1rem;
    }

    @keyframes popIn {
        from {
            transform: scale(0);
        }

        5% {
            transform: scale(1);
        }

        95% {
            transform: scale(1);
        }

        to {
            transform: scale(0);
        }
    }
</style>