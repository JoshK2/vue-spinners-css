<template>
    <div v-show="loading" class="lds-ring">
        <div v-bind:style="[spinnerStyle, animDiv1]"></div>
        <div v-bind:style="[spinnerStyle, animDiv2]"></div>
        <div v-bind:style="[spinnerStyle, animDiv3]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

export default {
    name: 'RingLoader',
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
                borderColor: `${this.color} transparent transparent transparent`,
                animationDuration: this.duration,
            },
        }
    },
    computed: {
        animDiv1 () {
            return calcPropertyValue('animationDelay', this.duration, -0.375)
        },
        animDiv2 () {
            return calcPropertyValue('animationDelay', this.duration, -0.25)
        },
        animDiv3 () {
            return calcPropertyValue('animationDelay', this.duration, -0.125)
        },
    }
}
</script>

<style scoped>
.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    border-color: #fff transparent transparent transparent;
    animation-name: lds-ring;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
