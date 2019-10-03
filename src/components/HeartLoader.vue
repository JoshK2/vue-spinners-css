<template>
    <div v-show="loading" class="lds-heart">
        <div v-bind:style="[spinnerStyle]">
            <div class="div-before" v-bind:style="[spinnerStyle]"></div>
            <div class="div-after" v-bind:style="[spinnerStyle]"></div>
        </div>
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'

export default {
    name: 'HeartLoader',
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
}
</script>

<style scoped>
.lds-heart {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
}
.lds-heart > div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    animation-name: lds-heart;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-iteration-count: infinite;
}
.lds-heart .div-after,
.lds-heart .div-before {
    content: ' ';
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: #fff;
}
.lds-heart .div-before {
    left: -24px;
    border-radius: 50% 0 0 50%;
}
.lds-heart .div-after {
    top: -24px;
    border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
}
</style>
