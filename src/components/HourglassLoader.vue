<template>
    <div v-show="loading" class="lds-hourglass" :style="{width: `${size}px`, height: `${size}px`}">
        <div class="lds-hourglass-after" v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
export default {
    name: 'HourglassLoader',
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
                borderWidth: `${this.size * 0.4}px`,
                background: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-hourglass {
    display: inline-block;
    position: relative;
}
.lds-hourglass-after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 10%;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
}
</style>
