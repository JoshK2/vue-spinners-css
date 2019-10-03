<template>
    <div v-show="loading" class="lds-spinner" :style="{ width: `${size}px`, height: `${size}px` }">
        <div
            v-for="(_, index) in Array(12)"
            :key="index"
            :style="{ transformOrigin: `${size * 0.5}px ${size * 0.5}px` }"
        >
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpinnerLoader',
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
    },
    data() {
        return {
            spinnerStyle: {
                top: `${this.size * 0.0375}px`,
                left: `${this.size * 0.4625}px`,
                width: `${this.size * 0.075}px`,
                height: `${this.size * 0.225}px`,
                background: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
}
.lds-spinner div {
    animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div .div-after {
    content: ' ';
    display: block;
    position: absolute;

    border-radius: 20%;
    background: #fff;
}
.lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
}
@keyframes lds-spinner {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
