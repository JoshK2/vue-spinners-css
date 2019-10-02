<template>
    <div v-show="loading" class="lds-ripple">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle, animDiv2]"></div>
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'
import calcPropertyValue from '@/helpers/calcPropertyValue.js'

export default {
    name: 'RippleLoader',
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
            default: '1s',
            validator: validateDuration
        },
    },
    data() {
        return {
            spinnerStyle: {
                borderColor: this.color,
                animationDuration: this.duration,
            },
        }
    },
    computed: {
        animDiv2 () {
            return calcPropertyValue('animationDelay', this.duration, -0.5)
        },
    },
}
</script>

<style scoped>
.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation-name: lds-ripple;
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
    animation-iteration-count: infinite;
}
@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
