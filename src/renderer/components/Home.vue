<template>

    <div class="container-presentation">

        <div class="logo">
            <img height="350" width="300" src="../assets/joystick.png"></img>
        </div>
        <div class="presentation">
            <div class="text">
                <p>GameDevTycoon</p>
                <p>HELPER</p>
                <p>Devenez le nouveau steve Jobs...</p>
                <button><router-link :to="{ name: 'game'}">COMMENCER</router-link></button>
                <button><router-link :to="{ name: 'game'}">CONTINUER</router-link></button>
                <button><router-link :to="{ name: 'help'}">HELP</router-link></button>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
      name: 'home'
    }
</script>

<style lang="scss">

    @import "../styles/base.scss";

</style>
