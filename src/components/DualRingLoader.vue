<template>
    <div v-show="loading" class="lds-dual-ring">
        <div class="lds-dual-ring-after" v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'

export default {
    name: 'DualRingLoader',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        color: {
            type: String,
            default: '#7f58af',
        },
        duration: {
            type: String,
            default: '1.2s',
            validator: validateDuration
        },
    },
    data() {
        return {
            spinnerStyle: {
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
    width: 80px;
    height: 80px;
}
.lds-dual-ring-after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
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
