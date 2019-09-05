<template>
    <div v-show="loading" class="lds-facebook">
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

<style>
.lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
}
@keyframes lds-facebook {
    0% {
        top: 8px;
        height: 64px;
    }
    50%,
    100% {
        top: 24px;
        height: 32px;
    }
}
</style>
