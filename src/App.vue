<template>
    <div id="app">
        <h1 style="text-align: center;">Vue Spinners</h1>
        <div class="block">
            <CircleLoader :color="'#54f1d2'" />
            <CircleLoader :color="'#be97e8'" />
            <CircleLoader />
            <CircleLoader duration="5s" />
        </div>
        <div class="block">
            <DefaultLoader :color="'#54f1d2'" />
            <DefaultLoader :color="'#be97e8'" />
            <DefaultLoader />
            <DefaultLoader duration="5s" />
        </div>
        <div class="block">
            <DualRingLoader :color="'#54f1d2'" />
            <DualRingLoader :color="'#be97e8'" />
            <DualRingLoader />
            <DualRingLoader duration="5s" />
        </div>
        <div class="block">
            <EllipsisLoader :color="'#54f1d2'" />
            <EllipsisLoader :color="'#be97e8'" />
            <EllipsisLoader/>
            <EllipsisLoader duration="5s" />
        </div>
        <div class="block">
            <FacebookLoader :color="'#54f1d2'" />
            <FacebookLoader :color="'#be97e8'" />
            <FacebookLoader />
            <FacebookLoader duration="5s" />
        </div>
        <div class="block">
            <GridLoader :color="'#54f1d2'" />
            <GridLoader :color="'#be97e8'" />
            <GridLoader />
            <GridLoader duration="5s" />
        </div>
        <div class="block">
            <HeartLoader :color="'#54f1d2'" />
            <HeartLoader :color="'#be97e8'" />
            <HeartLoader />
            <HeartLoader duration="5s" />
        </div>
        <div class="block">
            <HourglassLoader :color="'#54f1d2'" />
            <HourglassLoader :color="'#be97e8'" />
            <HourglassLoader />
            <HourglassLoader duration="5s" />
        </div>
        <div class="block">
            <RingLoader :color="'#54f1d2'" />
            <RingLoader :color="'#be97e8'" />
            <RingLoader />
            <RingLoader duration="5s" />
        </div>
        <div class="block">
            <RippleLoader :color="'#54f1d2'" />
            <RippleLoader :color="'#be97e8'" />
            <RippleLoader />
            <RippleLoader duration="5s" />
        </div>
        <div class="block">
            <RollerLoader :color="'#54f1d2'" />
            <RollerLoader :color="'#be97e8'" />
            <RollerLoader />
            <RollerLoader duration="5s" />
        </div>
        <div class="block">
            <SpinnerLoader :color="'#54f1d2'" />
            <SpinnerLoader :color="'#be97e8'" />
            <SpinnerLoader />
            <SpinnerLoader duration="5s" />
        </div>
        <div class="block">
            <OrbitalsLoader :color="'#54f1d2'" />
            <OrbitalsLoader :color="'#be97e8'" />
            <OrbitalsLoader />
            <OrbitalsLoader duration="10s" />
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
h1 {
    width: 100%;
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
    margin: 20px;
}
</style>
