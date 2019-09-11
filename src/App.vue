<template>
    <div id="app">
        <h1 style="text-align: center;">Vue Spinners</h1>
        <div class="block">
            <CircleLoader :color="'#54f1d2'" />
            <CircleLoader :color="'#be97e8'" />
            <CircleLoader />
        </div>
        <div class="block">
            <DefaultLoader :color="'#54f1d2'" />
            <DefaultLoader :color="'#be97e8'" />
            <DefaultLoader />
        </div>
        <div class="block">
            <DualRingLoader :color="'#54f1d2'" />
            <DualRingLoader :color="'#be97e8'" />
            <DualRingLoader />
        </div>
        <div class="block">
            <EllipsisLoader :color="'#54f1d2'" />
            <EllipsisLoader :color="'#be97e8'" />
            <EllipsisLoader />
        </div>
        <div class="block">
            <FacebookLoader :color="'#54f1d2'" />
            <FacebookLoader :color="'#be97e8'" />
            <FacebookLoader />
        </div>
        <div class="block">
            <GridLoader :color="'#54f1d2'" />
            <GridLoader :color="'#be97e8'" />
            <GridLoader />
        </div>
        <div class="block">
            <HeartLoader :color="'#54f1d2'" />
            <HeartLoader :color="'#be97e8'" />
            <HeartLoader />
        </div>
        <div class="block">
            <HourglassLoader :color="'#54f1d2'" />
            <HourglassLoader :color="'#be97e8'" />
            <HourglassLoader />
        </div>
        <div class="block">
            <RingLoader :color="'#54f1d2'" />
            <RingLoader :color="'#be97e8'" />
            <RingLoader />
        </div>
        <div class="block">
            <RippleLoader :color="'#54f1d2'" />
            <RippleLoader :color="'#be97e8'" />
            <RippleLoader />
        </div>
        <div class="block">
            <RollerLoader :color="'#54f1d2'" />
            <RollerLoader :color="'#be97e8'" />
            <RollerLoader />
        </div>
        <div class="block">
            <SpinnerLoader :color="'#54f1d2'" />
            <SpinnerLoader :color="'#be97e8'" />
            <SpinnerLoader />
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
import CircleLoader from './components/CircleLoader.vue'
import DefaultLoader from './components/DefaultLoader.vue'
import DualRingLoader from './components/DualRingLoader.vue'
import EllipsisLoader from './components/EllipsisLoader.vue'
import FacebookLoader from './components/FacebookLoader'
import GridLoader from './components/GridLoader.vue'
import HeartLoader from './components/HeartLoader.vue'
import HourglassLoader from './components/HourglassLoader.vue'
import RingLoader from './components/RingLoader.vue'
import RippleLoader from './components/RippleLoader.vue'
import RollerLoader from './components/RollerLoader.vue'
import SpinnerLoader from './components/SpinnerLoader.vue'

export default {
    name: 'app',
    components: {
        CircleLoader,
        DefaultLoader,
        DualRingLoader,
        EllipsisLoader,
        FacebookLoader,
        GridLoader,
        HeartLoader,
        HourglassLoader,
        RingLoader,
        RippleLoader,
        RollerLoader,
        SpinnerLoader,
    },
}
</script>

<style>
#app {
    text-align: center;
    width: 564px;
    margin: auto;
}
.block {
    float: left;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 240px;
    height: 84px;
    margin: 10px;
    padding: 10px;
}
.loader {
    margin: 20px;
}
</style>
