<template>
    <div v-show="loading" class="lds-default" :style="{width: `${size}px`, height: `${size}px`}">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
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
export default {
    name: 'DefaultLoader',
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
            default: 80,
        },
    },
    data() {
        return {
            spinnerStyle: {
                background: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-default {
    display: inline-block;
    position: relative;
}
.lds-default div {
    position: absolute;
    width: 7.5%;
    height: 7.5%;
    background: #fff;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 46.25%;
    left: 82.5%;
}
.lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 27.5%;
    left: 77.5%;
}
.lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 13.75%;
    left: 65%;
}
.lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 8.75%;
    left: 46.25%;
}
.lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 13.75%;
    left: 27.5%;
}
.lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 27.5%;
    left: 13.75%;
}
.lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 46.25%;
    left: 8.75%;
}
.lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 65%;
    left: 13.75%;
}
.lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 77.5%;
    left: 27.5%;
}
.lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 82.5%;
    left: 46.25%;
}
.lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 77.5%;
    left: 65%;
}
.lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 65%;
    left: 77.5%;
}
@keyframes lds-default {
    0%,
    20%,
    80%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}
</style>
