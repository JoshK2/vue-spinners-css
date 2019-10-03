<template>
    <div v-show="loading" class="lds-facebook" :style="{width: `${size}px`, height: `${size}px`}">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
export default {
    name: 'FacebookLoader',
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
                background: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-facebook {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    position: relative;
}
.lds-facebook div {
    width: 20%;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div + div {
    margin-left: 10%;
}
.lds-facebook div:nth-child(1) {
    animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
    animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
    animation-delay: 0;
}
@keyframes lds-facebook {
    0% {
        height: 80%;
    }
    50%,
    100% {
        height: 40%;
    }
}
</style>
