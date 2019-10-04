<template>
    <div v-show="loading" class="lds-roller" :style="{ width: `${size}px`, height: `${size}px` }">
        <div
            v-for="(_, i) in Array(8)"
            :key="`lds-roller-${i}`"
            :style="[mainAnimation, { transformOrigin: `${size * 0.5}px ${size * 0.5}px` }, animDivs[0]]"
        >
            <div class="div-after" v-bind:style="[spinnerStyle, spinnerStylePosition(i)]"></div>
        </div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

export default {
    name: 'RollerLoader',
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
                width: `${this.size * 0.0875}px`,
                height: `${this.size * 0.0875}px`,
                margin: `-${this.size * 0.05}px 0 0 -${this.size * 0.05}px`,
                background: this.color,
            },
        }
    },
    methods: {
        spinnerStylePosition(nthChild) {
            const topLeftTable = [
                [0.7875, 0.7875],
                [0.7875, 0.7875],
                [0.85, 0.7],
                [0.8875, 0.6],
                [0.9, 0.5],
                [0.8875, 0.4],
                [0.85, 0.3],
                [0.7875, 0.2125],
                [0.7, 0.15],
            ]

            const [top, left] = topLeftTable[nthChild].map(i => i * this.size)

            return { top: `${top}px`, left: `${left}px` }
        },
    },
    computed: {
        mainAnimation () {
            return { animationDuration: this.duration }
        },
        animDivs () {
            const divsStyles = []
            for (let i = 1; i <= 8; i++) {
                divsStyles.push(calcPropertyValue('animationDelay', this.duration, -0.03 * i))
            }
            return divsStyles
        },
    },
}
</script>

<style scoped>
.lds-roller {
    display: inline-block;
    position: relative;
}
.lds-roller > div {
    animation-name: lds-roller;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
}
.lds-roller div .div-after {
    content: ' ';
    display: block;
    position: absolute;
    border-radius: 50%;
    background: #fff;
}
@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
