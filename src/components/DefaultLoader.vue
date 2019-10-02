<template>
    <div v-show="loading" class="lds-default">
        <div
            v-for="i in 12"
            :key="`lds-default-${i}`"
            v-bind:style="[spinnerStyle, divsStyles[i - 1]]"
        />
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'
import calcPropertyValue from '@/helpers/calcPropertyValue.js'

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
                divsStyles.push(calcPropertyValue('animationDelay', this.duration, 0.083 * (13 - i) - 1))
            }
            return divsStyles
        },
    }
}
</script>

<style scoped>
.lds-default {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-default div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    animation-name: lds-default;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
}
.lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
}
.lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
}
.lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
}
.lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
}
.lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
}
.lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
}
.lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
}
.lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
}
.lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
}
.lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
}
.lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
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
