<template>

    <div id="navbar">

        <router-link :to="{ name: 'home'}">
            <div class="item-navbar item-logo">
                <div class="logo"><img src="../assets/joystick.png"></img></div>
                <p>GameDevTycoon<br>Help</p>
            </div>
        </router-link>

        <router-link class="item-navbar" :to="{ name: 'list', params: {object: 'genre'}}"><div><span>GENRE</span></div></router-link>
        <router-link class="item-navbar" :to="{ name: 'list', params: {object: 'theme'}}"><div><span>THEME</span></div></router-link>
        <router-link class="item-navbar" :to="{ name: 'list', params: {object: 'public'}}"><div><span>PUBLIC</span></div></router-link>
        <router-link class="item-navbar" :to="{ name: 'list', params: {object: 'platform'}}"><div><span>PLATFORME</span></div></router-link>
        <router-link class="item-navbar" :to="{ name: 'game', params: {object: 'game'}}"><div><span>GAME</span></div></router-link>
        <router-link class="item-navbar" :to="{ name: 'test'}">TEST</router-link>
        STATS

    </div>

</template>

<script>
    export default {
      name: 'navbar'
    }
</script>

<style lang="scss">

    @import "../styles/base.scss";

</style>
