<template>
    <div v-show="loading" class="lds-roller" :style="{ width: `${size}px`, height: `${size}px` }">
        <div
            v-for="(_, index) in Array(8)"
            :key="index"
            :style="{ transformOrigin: `${size * 0.5}px ${size * 0.5}px` }"
        >
            <div class="div-after" v-bind:style="[spinnerStyle, spinnerStylePosition(index)]"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RollerLoader',
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
                width: `${this.size * 0.0875}px`,
                height: `${this.size * 0.0875}px`,
                margin: `-${this.size * 0.05}px 0 0 -${this.size * 0.05}px`,
                background: this.color,
            },
        }
    },
    methods: {
        spinnerStylePosition(nthChild) {
            const topLeftTable = [
                [0.7875, 0.7875],
                [0.7875, 0.7875],
                [0.85, 0.7],
                [0.8875, 0.6],
                [0.9, 0.5],
                [0.8875, 0.4],
                [0.85, 0.3],
                [0.7875, 0.2125],
                [0.7, 0.15],
            ]

            const [top, left] = topLeftTable[nthChild].map(i => i * this.size)

            return { top: `${top}px`, left: `${left}px` }
        },
    },
}
</script>

<style scoped>
.lds-roller {
    display: inline-block;
    position: relative;
}
.lds-roller > div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-roller div .div-after {
    content: ' ';
    display: block;
    position: absolute;
    border-radius: 50%;
    background: #fff;
}
.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}
.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}
.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}
.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}
.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}
.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}
.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}
.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
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
