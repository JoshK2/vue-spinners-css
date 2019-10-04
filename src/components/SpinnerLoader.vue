<template>
    <div v-show="loading" class="lds-spinner">
        <div
            v-for="i in 12"
            :key="`lds-spinner-${i}`"
            v-bind:style="[spinnerStyle, divsStyles[i - 1]]"
        >
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

export default {
    name: 'SpinnerLoader',
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
                background: this.color,
                animationDuration: this.duration,
            },
        }
    },
    computed: {
        divsStyles () {
            const divsStyles = []
            for (let i = 1; i <= 12; i++) {
                divsStyles.push(calcPropertyValue('animationDelay', this.duration, 0.083 * i - 1))
            }
            return divsStyles
        },
    }
}
</script>

<style scoped>
.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-spinner div {
    transform-origin: 40px 40px;
    animation-name: lds-spinner;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.lds-spinner div .div-after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
}
.lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
}
.lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
}
.lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
}
.lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
}
.lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
}
.lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
}
.lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
}
.lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
}
.lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
}
.lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
}
.lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
}
.lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
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
