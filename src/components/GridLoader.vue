<template>
    <div v-show="loading" class="lds-grid" :style="{ width: `${size}px`, height: `${size}px` }">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'

export default {
    name: 'GridLoader',
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
            validator: validateDuration
        },
    },
    data() {
        return {
            spinnerStyle: {
                background: this.color,
                animationDuration: this.duration,
            },
        }
    },
}
</script>

<style scoped>
.lds-grid {
    display: inline-flex;
    flex-wrap: wrap;
}
.lds-grid div {
    width: 20%;
    height: 20%;

    margin-top: 10%;
    margin-left: 10%;

    border-radius: 50%;
    background: #fff;
    animation-name: lds-grid;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.lds-grid div:nth-child(1) {
    animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
    animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
    animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
    animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
    animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
    animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
    margin-bottom: 10%;
    animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
    animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
    animation-delay: -1.6s;
}
@keyframes lds-grid {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
</style>
