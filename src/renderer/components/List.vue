<template>

    <div class="container-list">

        <transition name="title-transition" mode="out-in">

            <div v-bind:key="Math.random()" class="title-items">
                <div class="headline"></div>
                <div class="title">{{ this.objectType }}</div>
            </div>

        </transition>

        <a href="#" class="myButton1">ALL</a>
        <a href="#" class="myButton1">ACQUIS</a>
        <a href="#" class="myButton1">NON ACQUIS</a>


        <div class="list-items">

            <div @click="checkedItem(object)" class="item" v-for="object in objects">
                <div class="check" v-show="object.isActivate">
                    <img height="35" width="35" src="../assets/checked.png"></img>
                </div>
                <div class="image">
                    <img src="https://picsum.photos/75/75/?image=26" alt="logo"></img>
                </div>
                <div class="name"><span>{{ object.name }}</span></div>
            </div>

        </div>

    </div>

</template>

<script>

	// import ConnectionManager from '../../service/ConnectionManager'
	// const connectionManager = new ConnectionManager()

	export default
	{
		name: 'list',

		data: function ()
		{
			return {
				objects: null,
                objectType: this.$route.params.object,
                connectionManager: null
			}
		},

        methods: {

	        checkedItem: function (object)
	        {
		        this.$store.state.connectionManager.checkItem(object, this.objectType).then()
	        },
        },

		mounted ()
		{

			console.log(this.$store.state.connectionManager)
			this.$store.state.connectionManager.getAll(this.objectType).then(data => {
				this.objects = data
            })
		}
	}

</script>

<style lang="scss">

    @import "../styles/base.scss";

    .title-transition-enter-active
    {
        transition: all 0.3s;
        opacity: 1;
    }

    .title-transition-leave-active
    {
        transition: all 0.3s;
    }

    .title-transition-enter
    {
        transform: translateX(500px);
        opacity: 0;
    }

    .title-transition-leave-to
    {
        transform: translateX(500px);
        opacity: 0;
    }

</style>
