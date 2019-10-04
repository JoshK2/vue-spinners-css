<template>
    <div v-show="loading" class="lds-dual-ring" :style="{ width: `${size}px`, height: `${size}px` }">
        <div class="lds-dual-ring-after" v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'

export default {
    name: 'DualRingLoader',
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
        },
        duration: {
            type: String,
            default: '1.2s',
            validator: validateDuration,
        },
    },
    data() {
        return {
            spinnerStyle: {
                borderWidth: `${this.size * 0.075}px`,
                borderColor: `${this.color} transparent`,
                animationDuration: this.duration,
            },
        }
    },
}
</script>

<style scoped>
.lds-dual-ring {
    display: inline-block;
}
.lds-dual-ring-after {
    content: ' ';
    display: block;

    /* ratio: calc(64px / 80px) */
    width: 80%;
    height: 80%;
    /* ratio: calc(8px / 80px) */
    margin: 10%;

    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation-name: lds-dual-ring;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
