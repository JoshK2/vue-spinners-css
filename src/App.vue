<template>
    <div>
        <div>
            <h1>Vue Spinners</h1>
            <div class="normal-spinners">
                <CircleLoader :color="'#be97e8'" class="loader" />
                <DefaultLoader :color="'#be97e8'" class="loader" />
                <DualRingLoader :color="'#be97e8'" class="loader" />
                <EllipsisLoader :color="'#be97e8'" class="loader" />
                <FacebookLoader :color="'#be97e8'" class="loader" />
                <GridLoader :color="'#be97e8'" class="loader" />
                <HeartLoader :color="'#be97e8'" class="loader" />
                <HourglassLoader :color="'#be97e8'" class="loader" />
                <RingLoader :color="'#be97e8'" class="loader" />
                <RippleLoader :color="'#be97e8'" class="loader" />
                <RollerLoader :color="'#be97e8'" class="loader" />
                <SpinnerLoader :color="'#be97e8'" class="loader" />
                <OrbitalsLoader :color="'#be97e8'" class="loader" />
                <div style="clear: both"></div>
            </div>
        </div>
        <div>
            <h2>Animation Duration Property</h2>
            <div class="normal-spinners">
                <CircleLoader :color="'#be97e8'" duration="5s" />
                <DefaultLoader :color="'#be97e8'" duration="5s" />
                <DualRingLoader :color="'#be97e8'" duration="5s" />
                <EllipsisLoader :color="'#be97e8'" duration="2s" />
                <FacebookLoader :color="'#be97e8'" duration="5s" />
                <GridLoader :color="'#be97e8'" duration="5s" />
                <HeartLoader :color="'#be97e8'" duration="5s" />
                <HourglassLoader :color="'#be97e8'" duration="5s" />
                <RingLoader :color="'#be97e8'" duration="5s" />
                <RippleLoader :color="'#be97e8'" duration="5s" />
                <RollerLoader :color="'#be97e8'" duration="5s" />
                <SpinnerLoader :color="'#be97e8'" duration="5s" />
                <OrbitalsLoader :color="'#be97e8'" duration="10s" />
            </div>
        </div>
        <div id="app">
            <h2 style="text-align: center;">Color Property</h2>
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
            <div class="block">
                <OrbitalsLoader :color="'#54f1d2'" />
                <OrbitalsLoader :color="'#be97e8'" />
                <OrbitalsLoader />
            </div>
            <div style="clear: both"></div>
        </div>
        <div id="app">
            <h2 style="text-align: center;">Size Property</h2>
            <div class="block">
                <CircleLoader :color="'#be97e8'" />
                <CircleLoader :color="'#be97e8'" :size="32" />
                <CircleLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <DefaultLoader :color="'#be97e8'" />
                <DefaultLoader :color="'#be97e8'" :size="32" />
                <DefaultLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <DualRingLoader :color="'#be97e8'" />
                <DualRingLoader :color="'#be97e8'" :size="32" />
                <DualRingLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <FacebookLoader :color="'#be97e8'" />
                <FacebookLoader :color="'#be97e8'" :size="32" />
                <FacebookLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <GridLoader :color="'#be97e8'" />
                <GridLoader :color="'#be97e8'" :size="32" />
                <GridLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <HeartLoader :color="'#be97e8'" />
                <HeartLoader :color="'#be97e8'" :size="32" />
                <HeartLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <HourglassLoader :color="'#be97e8'" />
                <HourglassLoader :color="'#be97e8'" :size="32" />
                <HourglassLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <RingLoader :color="'#be97e8'" />
                <RingLoader :color="'#be97e8'" :size="32" />
                <RingLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <RippleLoader :color="'#be97e8'" />
                <RippleLoader :color="'#be97e8'" :size="32" />
                <RippleLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <RollerLoader :color="'#be97e8'" />
                <RollerLoader :color="'#be97e8'" :size="32" />
                <RollerLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <SpinnerLoader :color="'#be97e8'" />
                <SpinnerLoader :color="'#be97e8'" :size="32" />
                <SpinnerLoader :color="'#be97e8'" :size="16" />
            </div>
            <div class="block">
                <OrbitalsLoader :color="'#be97e8'" />
                <OrbitalsLoader :color="'#be97e8'" :size="32" />
                <OrbitalsLoader :color="'#be97e8'" :size="16" />
            </div>
            <div style="clear: both"></div>
        </div>
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
import OrbitalsLoader from './components/OrbitalsLoader.vue'

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
        OrbitalsLoader,
    },
}
</script>

<style>
#app {
    text-align: center;
    width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.normal-spinners {
    display: flex;
    justify-content: center;
}
h1,
h2 {
    width: 100%;
    text-align: center;
}
.block {
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 320px;
    height: 84px;
    margin: 10px;
    padding: 10px;
}
.loader {
    float: left;
}
</style>
