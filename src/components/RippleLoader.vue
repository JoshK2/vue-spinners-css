<template>
    <div v-show="loading" class="lds-ripple" :style="{width: `${size}px`, height: `${size}px`}">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
export default {
    name: 'RippleLoader',
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
                borderWidth: `${this.size * 0.05}px`,
                borderColor: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-ripple {
    display: inline-block;
    position: relative;
}
.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes lds-ripple {
    0% {
        top: 45%;
        left: 45%;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 90%;
        height: 90%;
        opacity: 0;
    }
}
</style>
