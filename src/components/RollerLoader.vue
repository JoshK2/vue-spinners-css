<template>
    <div v-show="loading" class="lds-roller">
        <div v-bind:style="[mainAnimation, animDivs[0]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[1]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[2]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[3]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[4]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[5]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[6]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
        <div v-bind:style="[mainAnimation, animDivs[7]]">
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
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
            },
        }
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
    }
}
</script>

<style scoped>
.lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-roller > div {
    transform-origin: 40px 40px;
    animation-name: lds-roller;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-iteration-count: infinite;
}
.lds-roller div .div-after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) .div-after {
    top: 63px;
    left: 63px;
}
.lds-roller div:nth-child(2) .div-after {
    top: 68px;
    left: 56px;
}
.lds-roller div:nth-child(3) .div-after {
    top: 71px;
    left: 48px;
}
.lds-roller div:nth-child(4) .div-after {
    top: 72px;
    left: 40px;
}
.lds-roller div:nth-child(5) .div-after {
    top: 71px;
    left: 32px;
}
.lds-roller div:nth-child(6) .div-after {
    top: 68px;
    left: 24px;
}
.lds-roller div:nth-child(7) .div-after {
    top: 63px;
    left: 17px;
}
.lds-roller div:nth-child(8) .div-after {
    top: 56px;
    left: 12px;
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
