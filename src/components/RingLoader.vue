<template>
    <div v-show="loading" class="lds-ring" :style="{width: `${size}px`, height: `${size}px`}">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
export default {
    name: 'RingLoader',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        size: {
            type: Number,
            default: 80,
        },
        color: {
            type: String,
            default: '#7f58af',
        }
    },
    data() {
        return {
            spinnerStyle: {
                borderWidth: `${this.size * 0.1}px`,
                borderColor: `${this.color} transparent transparent transparent`,
            },
        }
    },
}
</script>

<style scoped>
.lds-ring {
    display: inline-block;
    position: relative;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;

    /* ratio: calc(64px / 80px) */
    width: 80%;
    height: 80%;

    /* ratio: calc(8px / 80px) */
    margin: 10%;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
