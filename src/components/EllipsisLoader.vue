<template>
    <div v-show="loading" class="lds-ellipsis" :style="{ width: `${size}px`, height: `${size}px` }">
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
        <div v-bind:style="[spinnerStyle]"></div>
    </div>
</template>

<script>
export default {
    name: 'EllipsisLoader',
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
    },
    data() {
        return {
            spinnerStyle: {
                background: this.color,
            },
        }
    },
}
</script>

<style scoped>
.lds-ellipsis {
    display: inline-flex;
    align-items: center;

    position: relative;
}
.lds-ellipsis div {
    position: absolute;

    width: 16.25%;
    height: 16.25%;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
    left: 10%;
    animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
    animation: lds-ellipsis3 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
    left: 70%;
    animation: lds-ellipsis4 0.6s infinite;
}
@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes lds-ellipsis2 {
    0% {
        left: 10%;
    }
    100% {
        left: 40%;
    }
}
@keyframes lds-ellipsis3 {
    0% {
        left: 40%;
    }
    100% {
        left: 70%;
    }
}
@keyframes lds-ellipsis4 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
</style>
