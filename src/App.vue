<template>
    <div id="app">
        <h2>Color Property</h2>
        <div class="block">
            <CircleLoader :color="'black'" />
            <CircleLoader :color="'#de3541'" />
            <CircleLoader />
        </div>
        <div class="block">
            <DefaultLoader :color="'black'" />
            <DefaultLoader :color="'#de3541'" />
            <DefaultLoader />
        </div>
        <div class="block">
            <DualRingLoader :color="'black'" />
            <DualRingLoader :color="'#de3541'" />
            <DualRingLoader />
        </div>
        <div class="block">
            <EllipsisLoader :color="'black'" />
            <EllipsisLoader :color="'#de3541'" />
            <EllipsisLoader />
        </div>
        <div class="block">
            <FacebookLoader :color="'black'" />
            <FacebookLoader :color="'#de3541'" />
            <FacebookLoader />
        </div>
        <div class="block">
            <GridLoader :color="'black'" />
            <GridLoader :color="'#de3541'" />
            <GridLoader />
        </div>
        <div class="block">
            <HeartLoader :color="'black'" />
            <HeartLoader :color="'#de3541'" />
            <HeartLoader />
        </div>
        <div class="block">
            <HourglassLoader :color="'black'" />
            <HourglassLoader :color="'#de3541'" />
            <HourglassLoader />
        </div>
        <div class="block">
            <RingLoader :color="'black'" />
            <RingLoader :color="'#de3541'" />
            <RingLoader />
        </div>
        <div class="block">
            <RippleLoader :color="'black'" />
            <RippleLoader :color="'#de3541'" />
            <RippleLoader />
        </div>
        <div class="block">
            <RollerLoader :color="'black'" />
            <RollerLoader :color="'#de3541'" />
            <RollerLoader />
        </div>
        <div class="block">
            <SpinnerLoader :color="'black'" />
            <SpinnerLoader :color="'#de3541'" />
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
