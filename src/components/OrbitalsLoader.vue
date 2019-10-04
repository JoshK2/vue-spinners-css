<template>
    <div v-show="loading" class="lds-orbitals" :style="{ width: `${size}px`, height: `${size}px` }">
        <div class="center" :style="[backgroundSpinnerStyle]"></div>
        <div class="inner-spin" :style="[innerSpinStyle]">
            <div class="inner-arc inner-arc_start-a" :style="[borderSpinnerStyle, arc(0)]"></div>
            <div class="inner-arc inner-arc_end-a" :style="[borderSpinnerStyle, arc(0)]"></div>
            <div class="inner-arc inner-arc_start-b" :style="[borderSpinnerStyle, arc(0)]"></div>
            <div class="inner-arc inner-arc_end-b" :style="[borderSpinnerStyle, arc(0)]"></div>
            <div class="inner-moon-a" :style="[backgroundSpinnerStyle, moon(0, 0)]"></div>
            <div class="inner-moon-b" :style="[backgroundSpinnerStyle, moon(0, 1)]"></div>
        </div>
        <div class="outer-spin" :style="[outerSpinStyle]">
            <div class="outer-arc outer-arc_start-a" :style="[borderSpinnerStyle, arc(1)]"></div>
            <div class="outer-arc outer-arc_end-a" :style="[borderSpinnerStyle, arc(1)]"></div>
            <div class="outer-arc outer-arc_start-b" :style="[borderSpinnerStyle, arc(1)]"></div>
            <div class="outer-arc outer-arc_end-b" :style="[borderSpinnerStyle, arc(1)]"></div>
            <div class="outer-moon-a" :style="[backgroundSpinnerStyle, moon(1, 0)]"></div>
            <div class="outer-moon-b" :style="[backgroundSpinnerStyle, moon(1, 1)]"></div>
        </div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

export default {
    name: 'OrbitalsLoader',
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
            default: '4s',
            validator: validateDuration
        },
    },
    data() {
        return {
            backgroundSpinnerStyle: {
                background: this.color,
            },
            borderSpinnerStyle: {
                borderColor: this.color,
            },
            outerSpinStyle: {
                animationDuration: this.duration,
            },
        }
    },
    computed: {
        innerSpinStyle () {
            return calcPropertyValue('animationDuration', this.duration, 0.75)
        }
    },
    methods: {
        arc(pos) {
            // [0] -> inner; [1] -> outer
            const sizes = [0.3875, 0.75].map(i => i * this.size)
            const size = sizes[pos]

            return {
                width: `${size}px`,
                height: `${size}px`,
                borderWidth: `${this.size * 0.0375}px`,
            }
        },
        moon(pos, variant) {
            // [0] -> inner; [1] -> outer
            const sizes = [[0.1, 0.2125], [0.1125, 0.4]]
            const [size, transform] = sizes[pos].map(i => i * this.size)
            const transformCalc = variant == 0 ? '+' : '-'

            return {
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(
                                calc(-50% ${transformCalc} ${transform}px), 
                                -50%)`,
            }
        },
    },
}
</script>

<style scoped>
.lds-orbitals {
    display: inline-block;
    position: relative;
}
.lds-orbitals * {
    --center: translate(-50%, -50%);
}
.lds-orbitals .center {
    position: absolute;
    width: 18.75%;
    height: 18.75%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: var(--center);
}
.lds-orbitals .outer-spin,
.lds-orbitals .inner-spin {
    position: absolute;
    top: 50%;
    left: 50%;
}
.lds-orbitals .inner-arc {
    position: absolute;
    border-radius: 50%;
    border: 3px solid;
}
.lds-orbitals .inner-arc_start-a {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(45deg);
}
.lds-orbitals .inner-arc_end-a {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(25deg);
}
.lds-orbitals .inner-moon-a {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
}
.lds-orbitals .inner-moon-b {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
}
.lds-orbitals .inner-arc_start-b {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(65deg) scale(-1, -1);
}
.lds-orbitals .inner-arc_end-b {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(45deg) scale(-1, -1);
}
.lds-orbitals .outer-arc {
    position: absolute;
    border-radius: 50%;
    border: 3px solid;
}
.lds-orbitals .outer-arc_start-a {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(65deg);
}
.lds-orbitals .outer-arc_end-a {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(45deg);
}
.lds-orbitals .outer-moon-a {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
}
.lds-orbitals .outer-moon-b {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
}
.lds-orbitals .outer-arc_start-b {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(65deg) scale(-1, -1);
}
.lds-orbitals .outer-arc_end-b {
    border-color: transparent transparent transparent;
    transform: var(--center) rotate(45deg) scale(-1, -1);
}
.lds-orbitals .outer-spin {
    animation-name: spin;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.lds-orbitals .inner-spin {
    animation-name: spin;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
