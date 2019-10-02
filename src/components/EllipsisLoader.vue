<template>
    <div v-show="loading" class="lds-ellipsis">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
import validateDuration from '@/helpers/validateDuration.js'

export default {
    name: 'EllipsisLoader',
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
.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation-name: lds-ellipsis1;
    animation-iteration-count: infinite;
}
.lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation-name: lds-ellipsis2;
    animation-iteration-count: infinite;
}
.lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation-name: lds-ellipsis2;
    animation-iteration-count: infinite;
}
.lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation-name: lds-ellipsis3;
    animation-iteration-count: infinite;
}
@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
}
</style>
