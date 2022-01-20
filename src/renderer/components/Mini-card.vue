<template>

    <div class="little-item">
        <div class="image">
            <img :src="require('@/assets/' + this.item.logo)" width="50" height="50" alt="logo"></img>
            <!--<img :src="this.$store.state.image" width="50" height="50" alt="logo"></img>-->
            <p>TOTO</p>
        </div>
        <div class="name">
            {{ this.item.name }}
        </div>
    </div>

</template>

<script>
	export default {
		name: "mini-card",
        props: ['item'],
	}
</script>

<style lang="scss">

    @import "../styles/base.scss";

</style>
