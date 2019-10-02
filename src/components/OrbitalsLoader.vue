<template>
    <div v-show="loading" class="lds-orbitals">
        <div class="center" v-bind:style="[backgroundSpinnerStyle]"></div>
        <div class="inner-spin" v-bind:style="[innerSpinStyle]">
            <div class="inner-arc inner-arc_start-a" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="inner-arc inner-arc_end-a" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="inner-arc inner-arc_start-b" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="inner-arc inner-arc_end-b" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="inner-moon-a" v-bind:style="[backgroundSpinnerStyle]"></div>
            <div class="inner-moon-b" v-bind:style="[backgroundSpinnerStyle]"></div>
        </div>
        <div class="outer-spin" v-bind:style="[outerSpinStyle]">
            <div class="outer-arc outer-arc_start-a" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="outer-arc outer-arc_end-a" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="outer-arc outer-arc_start-b" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="outer-arc outer-arc_end-b" v-bind:style="[borderSpinnerStyle]"></div>
            <div class="outer-moon-a" v-bind:style="[backgroundSpinnerStyle]"></div>
            <div class="outer-moon-b" v-bind:style="[backgroundSpinnerStyle]"></div>
        </div>
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'
import calcPropertyValue from '@/helpers/calcPropertyValue.js'

export default {
    name: 'OrbitalsLoader',
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
}
</script>

<style scoped>
.lds-orbitals {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-orbitals * {
    --center: translate(-50%, -50%);
}
.lds-orbitals .center {
    position: absolute;
    width: 15px;
    height: 15px;
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
    width: 31px;
    height: 31px;
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
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: var(--center) translate(17px, 0);
}
.lds-orbitals .inner-moon-b {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: var(--center) translate(-17px, 0);
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
    width: 60px;
    height: 60px;
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
    width: 9px;
    height: 9px;
    border-radius: 50%;
    transform: var(--center) translate(32px, 0);
}
.lds-orbitals .outer-moon-b {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    transform: var(--center) translate(-32px, 0);
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