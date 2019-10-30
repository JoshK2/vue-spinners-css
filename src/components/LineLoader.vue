<template>
    <div v-show="loading" class="lds-line" :style="{ width: `${size}px`, height: `${size}px` }">
        <div class="lds-line-before" v-bind:style="[spinnerStyle]"></div>
        <div class="lds-line-after" v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'

export default {
    name: 'LineLoader',
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
            validator: validateDuration,
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
.lds-line {
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.lds-line-after,
.lds-line-before {
    content: ' ';
    display: block;
    height: 10%;
    margin: 0 10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.lds-line-after {
    width: 0;
    animation-name: lds-line;
    animation-iteration-count: infinite;
}

.lds-line-before {
    width: 100%;
    opacity: 0.5;
}

@keyframes lds-line {
    0% {
        width: 0px;
        transform: translate(0%, -50%);
    }

    50% {
        width: 100%;
        transform: translate(0%, -50%);
    }

    100% {
        transform: translate(100%, -50%);
        width: 100%;
    }
}
</style>
