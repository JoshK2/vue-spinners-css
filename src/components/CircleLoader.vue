<template>
    <div v-show="loading" class="lds-circle" v-bind:style="[spinnerStyle]"></div>
</template>

<script>
export default {
    name: 'CircleLoader',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        color: {
            type: String,
            default: '#7f58af',
        },
        size: {
            type: Number,
            default: 64,
        },
    },
    data() {
        return {
            spinnerStyle: {
                background: this.color,
                width: `${this.size}px`,
                height: `${this.size}px`,
            },
        }
    },
}
</script>

<style scoped>
.lds-circle {
    display: inline-block;
    /* width: 64px;
    height: 64px; */
    margin: 8px;
    border-radius: 50%;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
    0%,
    100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
        transform: rotateY(3600deg);
    }
}
</style>
