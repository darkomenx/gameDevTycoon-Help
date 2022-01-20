<template>

    <div>

        <div style="height: 250px;">

            <h3>TEST : transitions simple 1</h3>
            <a href="#" class="myButton1" v-on:click="show1 = !show1">t1</a>
            <a href="#" class="myButton1" v-on:click="show2 = !show2">t2</a>

            <transition name="trans1">
                <div
                    v-if="show1"
                    style="
                        width: 150px;
                        height: 150px;
                        background-color: red;
                        padding: 10px;
                        margin: 5px;
                    "
                >
                    bonjour</div>
            </transition>

            <transition name="trans1">
                <div
                        v-if="show2"
                        style="
                        width: 150px;
                        height: 150px;
                        background-color: blue;
                        padding: 10px;
                        margin: 5px;
                    "
                >
                    en revoir!</div>
            </transition>


        </div>

        <div style="height: 250px;">

            <h3>TEST : transitions simple 2</h3>
            <a href="#" class="myButton1" @click="trans1()">t1</a>
            <a href="#" class="myButton1" @click="trans2()">t2</a>

            <transition name="trans1">
                <div
                        v-if="show3"
                        style="
                        width: 150px;
                        height: 150px;
                        background-color: red;
                        padding: 10px;
                        margin: 5px;
                    "
                >
                    bonjour</div>
            </transition>

            <transition name="trans1">
                <div
                        v-if="show4"
                        style="
                        width: 150px;
                        height: 150px;
                        background-color: blue;
                        padding: 10px;
                        margin: 5px;
                    "
                >
                    en revoir!</div>
            </transition>


        </div>

        <div>
            <h3>TEST : image static web</h3>

            <mini-card v-bind:item="public1"></mini-card>
            <!--<mini-card></mini-card>-->

        </div>

    </div>

</template>

<script>
	import MiniCard from './Mini-card'

	export default {
		name: "Test",
		components: {MiniCard},
		data: function ()
        {
            return {
            	show1: false,
            	show2: false,
            	show3: false,
            	show4: false,
                public1: false,
                logo: '',
	            loadingImagePath: [
		            '../assets/',
		            '/dimension-extraction-is-in-progress.gif'
	            ].join(''),
            }
        },

        beforeMount()
        {
	        this.$store.state.connectionManager.getOne('public', 1).then(data => {
		        this.public1 = data
		        console.log(this.public1)
	        })

        },

        mounted()
        {

        },

        methods:
        {
        	trans1: function ()
	        {
                this.show3 = true
	        },
	        trans2: function ()
	        {
              this.show3 = false

                setTimeout(function ()
                {
	                this.show4 = true
	                console.log('toto1')
                }, 3000)

	        },
            getPic()
            {
        	    	return '~@/assets/items/public/averti.png'
            }

        }

	}
</script>

<style lang="scss">

    @import "../styles/base.scss";

    .trans1-enter-active
    {

    }
    .trans1-enter
    {
        transform: translateX(100px);
    }
    .trans1-enter-to
    {
        transition: transform 1s ease-in-out;
    }

    .trans1-leave-active
    {

    }
    .trans1-leave
    {

    }
    .trans1-leave-to
    {
        transform: translateX(100px);
        transition: all 1s ease-in-out;
    }

</style>
