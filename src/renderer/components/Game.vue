<template>

    <div class="container-3parts">

        <div class="header">
            <transition name="title-transition" mode="out-in">

                <div v-bind:key="Math.random()" v-if="titleDisplay" class="title-header">
                    <div class="title">Créer votre jeu</div>
                    <div class="headline"></div>
                </div>

            </transition>
            <div class="container-info">
                <div class="info">
                    <p>GENRE</p>
                        <p>test</p>
                        <mini-card v-bind:item="objGenreSelected" v-if="objGenreSelected"></mini-card>

                </div>
                <div class="info">
                    <p>THEME</p>
                    <div class="little-item" v-if="objThemeSelected">
                        <div class="image">
                            <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                        </div>
                        <div class="name">
                            {{ objThemeSelected.name }}
                        </div>
                    </div>
                </div>
                <div class="info">
                    <p>PUBLIC</p>
                    <div class="little-item" v-if="objPublicSelected">
                        <div class="image">
                            <!--<img src="../assets/items/public/jeune.png" height="50" width="50" alt="logo"></img>-->
                            <img :src="imgPreUrl + objPublicSelected.logo" height="50" width="50" alt="logo"></img>
                        </div>
                        <div class="name">
                            {{ objPublicSelected.name }}
                        </div>
                    </div>
                </div>
                <div class="info">
                    <p>PLATFORM</p>
                    <div class="little-item" v-if="objPlatformSelected">
                        <div class="image">
                            <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                        </div>
                        <div class="name">
                            {{ objPlatformSelected.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">

            <div class="left">
                <transition name="title-transition">

                    <div v-bind:key="Math.random()" v-if="titleDisplay" class="title-section">
                        <div class="title">Options</div>
                        <div class="headline"></div>
                    </div>

                </transition>
                <div class="button-section">
                    <div><a href="#" class="myButton1"><img src="https://picsum.photos/50/50/?image=12" alt="logo"></img></a></div>
                    <div><a href="#" class="myButton1"><img src="https://picsum.photos/50/50/?image=13" alt="logo"></img></a></div>
                    <div><a href="#" class="myButton1"><img src="https://picsum.photos/50/50/?image=14" alt="logo"></img></a></div>
                </div>
            </div>

            <div class="right">

                <div class="container-list">

                    <transition name="title-transition">

                        <div v-bind:key="Math.random()" v-if="titleDisplay" class="title-items">
                            <div class="headline"></div>
                            <div class="title">{{ this.typeDisplay }}</div>
                        </div>

                    </transition>

                    <transition-group class="list-items" name="appear" tag="div" v-show="genresDisplay">

                        <div
                            class="item"
                            v-for="genre in genres"
                            v-bind:key="genre.id"
                            @click="activeCheck(genre)"
                        >
                            <div v-if="genre.check" class="check">
                                <img height="35" width="35" src="../assets/checked.png"></img>
                            </div>
                            <div class="image">
                                <img src="https://picsum.photos/75/75/?image=25" alt="logo"></img>
                            </div>
                            <div class="name">
                                {{ genre.name }}
                            </div>
                        </div>

                    </transition-group>

                    <transition-group class="list-items" name="appear" tag="div" v-show="themesDisplay">

                        <div
                            class="item"
                            v-for="theme in themes"
                            v-bind:key="theme.id"
                            @click="activeCheck(theme)"

                        >
                            <div v-if="theme.check" class="check">
                                <img height="35" width="35" src="../assets/checked.png"></img>
                            </div>
                            <div class="image">
                                <img src="https://picsum.photos/75/75/?image=25" alt="logo"></img>
                            </div>
                            <div class="name">
                                {{ theme.name }}
                            </div>
                        </div>

                    </transition-group>

                    <transition-group class="list-items" name="appear" tag="div" v-show="publicsDisplay">

                        <div
                            class="item"
                            v-for="pub in publics"
                            v-bind:key="pub.id"
                            @click="activeCheck(pub)"

                        >
                            <div v-if="pub.check" class="check">
                                <img height="35" width="35" src="../assets/checked.png"></img>
                            </div>
                            <div class="image">
                                <img src="https://picsum.photos/75/75/?image=25" alt="logo"></img>
                            </div>
                            <div class="name">
                                {{ pub.name }}
                            </div>
                        </div>

                    </transition-group>

                    <transition-group class="list-items" name="appear" tag="div" v-show="platformsDisplay">

                        <div
                            class="item"
                            v-for="platform in platforms"
                            v-bind:key="platform.id"
                            @click="activeCheck(platform)"

                        >
                            <div v-if="platform.check" class="check">
                                <img height="35" width="35" src="../assets/checked.png"></img>
                            </div>
                            <div class="image">
                                <img src="https://picsum.photos/75/75/?image=25" alt="logo"></img>
                            </div>
                            <div class="name">
                                {{ platform.name }}
                            </div>
                        </div>

                    </transition-group>

                    <transition-group name="appear" tag="div" v-show="finishDisplay">

                        <form
                            v-bind:key="7"
                            id="app"
                            @submit="checkForm"
                        >

                            <p v-bind:key="0">
                                Nom du jeu : <input v-model="gameName" name="gameName" required type="text" placeholder="type your game name">
                            </p>

                            <div v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                    <li v-for="error in errors">{{ error }}</li>
                                </ul>
                            </div>

                            <input type="submit" value="Submit">

                            <!--<p v-bind:key="1">-->
                                <!--Confirmez-vous la création du jeu suivant :-->
                                <!--<img @click="saveGame(objGenreSelected, objThemeSelected, objPublicSelected, objPlatformSelected)" height="35" width="35" src="../assets/checked.png" alt=""></img>-->
                                <!--<img height="35" width="35" src="../assets/false.png" alt=""></img>-->
                            <!--</p>-->

                        </form>

                        <div class="game-items" v-bind:key="6">

                            <div v-bind:key="2" class="item">
                                <div class="image">
                                    <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                                </div>
                                <div class="name">
                                    {{ objGenreSelected.name }}
                                </div>
                            </div>

                            <div v-bind:key="3" class="item">
                                <div class="image">
                                    <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                                </div>
                                <div class="name">
                                    {{ objThemeSelected.name }}
                                </div>
                            </div>

                            <div v-bind:key="4" class="item">
                                <div class="image">
                                    <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                                </div>
                                <div class="name">
                                    {{ objPublicSelected.name }}
                                </div>
                            </div>

                            <div v-bind:key="5" class="item">
                                <div class="image">
                                    <img src="https://picsum.photos/50/50/?image=25" alt="logo"></img>
                                </div>
                                <div class="name">
                                    {{ objPlatformSelected.name }}
                                </div>
                            </div>

                        </div>

                    </transition-group>

                    <transition-group name="appear" tag="div" v-show="createdDisplay">

                        <div v-bind:key="1">GAME créé</div>

                    </transition-group>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
	// import ConnectionManager from '../../service/ConnectionManager'
	import {Game} from './../../entity/Game'
	import MiniCard from './Mini-card'


	// const connectionManager = new ConnectionManager()

	export default
    {
		name: "game",
	    components: {MiniCard},
	    data: function ()
        {
			return {
				errors: [],
                imgPreUrl: '../assets/',
                actionForm: '/test',
                titleDisplay: true,
                genres: null,
                genresDisplay: true,
                objGenreSelected: false,
				themes: null,
				themesDisplay: false,
				objThemeSelected: false,
				publics: null,
                publicsDisplay: null,
				objPublicSelected: false,
				platforms: null,
				platformsDisplay: null,
				objPlatformSelected: false,
				typeDisplay: 'genre',
                finishDisplay: false,
                createdDisplay: false,
                gameName: null,
                objects: {'genre': null, 'public': null}
            }
        },

        beforeCreate()
        {

        },

        mounted()
        {
        	let promiseGenre    = this.$store.state.connectionManager.getAllUsers('genre')
        	let promisePublic   = this.$store.state.connectionManager.getAllUsers('public')
        	let promisePlatform = this.$store.state.connectionManager.getAllUsers('platform')
        	let promiseTheme    = this.$store.state.connectionManager.getAllUsers('theme')
	        let that            = this

            Promise.all([promiseGenre, promisePublic, promisePlatform, promiseTheme])
                .then(function([genres, publics, platforms, themes]){
	                that.initCheck([genres, publics, platforms, themes])
                	that.genres     = genres
                    that.publics    = publics
                    that.platforms  = platforms
                    that.themes     = themes
                })
        },
        methods:
        {
        	initCheck: function (data)
            {
	            for (let i=0, j=data.length; i < j; i+=1)
	            {
		            for (let key in data[i]){data[i][key]['check'] = false}
	            }
            },

        	activeCheck: function (object)
	        {
	        	object.check = true

                let currentType = object.constructor.name
                let afterType = null

                switch (currentType)
                {
                    case 'Genre':
                    	afterType = 'Theme'
                        this.objGenreSelected = object
                        break
	                case 'Theme':
		                afterType = 'Public'
		                this.objThemeSelected = object
		                break
	                case 'Public':
		                afterType = 'Platform'
		                this.objPublicSelected = object
		                break
	                case 'Platform':
		                afterType = 'Finish'
		                this.objPlatformSelected = object
		                break
                }

		        this.disappear(currentType)
                this.appear(afterType)
	        },

            disappear: function (type)
            {
                let that = this

	            setTimeout(() => {
		            switch (type)
		            {
			            case 'Genre':
				            that.genresDisplay = false
                            break
			            case 'Theme':
				            that.themesDisplay = false
				            break
			            case 'Public':
				            that.publicsDisplay = false
				            break
			            case 'Platform':
				            that.platformsDisplay = false
				            break
		            }
                }, 400)
            },

            appear: function (type)
            {
	            let that = this

	            setTimeout(() => {
		            switch (type)
		            {
			            case 'Theme':
				            that.themesDisplay = true
                            that.typeDisplay = 'Theme'
				            break
			            case 'Public':
				            that.publicsDisplay = true
				            that.typeDisplay = 'Public'
				            break
			            case 'Platform':
				            that.platformsDisplay = true
				            that.typeDisplay = 'Platform'
				            break
			            case 'Finish':
				            that.finishDisplay = true
				            that.typeDisplay = 'Finish'
				            break
		            }
	            }, 400)
            },

            checkForm: function (e)
            {
        	    this.errors = []

                if (this.gameName.length < 4)
                {
                	this.errors.push('Name to short !')
                }
                else
                {
                	this.finishDisplay = false
	                this.saveGame()
	                this.createdDisplay = true
                }

	            e.preventDefault()

            },

            saveGame: function ()
            {
            	let game = new Game()
                game.genre = this.objGenreSelected.id
                game.theme = this.objThemeSelected.id
                game.public = this.objPublicSelected.id
                game.platform = this.objPlatformSelected.id
                game.name = this.gameName
                game.identifier = 'grgrgr'

	            this.$store.state.connectionManager.createGame(game).then()
            }
        }
	}
</script>

<style lang="scss">

    @import "../styles/base.scss";

    .appear-enter-active
    {
        transition: all 0.3s;
        opacity: 1;
    }

    .appear-leave-active
    {
        transition: all 0.3s;
    }

    .appear-enter, .appear-leave-to
    {
        transform: translateX(750px);
        opacity: 0;
    }

</style>
