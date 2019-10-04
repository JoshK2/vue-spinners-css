<template>
    <div v-show="loading" class="lds-facebook">
        <div
            v-for="i in 3"
            :key="`lds-facebook-${i}`"
            v-bind:style="[spinnerStyle, divsStyles[i - 1]]"
        />
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

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
            for (let i = 3; i > 0; i--) {
                divsStyles.push(calcPropertyValue('animationDelay', this.duration, -0.1 * i))
            }
            return divsStyles
        },
    }
}
</script>

<style scoped>
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
    animation-name: lds-facebook;
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    animation-iteration-count: infinite;
}
.lds-facebook div:nth-child(1) {
    left: 8px;
}
.lds-facebook div:nth-child(2) {
    left: 32px;
}
.lds-facebook div:nth-child(3) {
    left: 56px;
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
