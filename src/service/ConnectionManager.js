import * as fs from 'fs'
import * as typeorm from 'typeorm'
import {Public} from './../entity/Public'
import {Genre} from './../entity/Genre'
import {Platform} from './../entity/Platform'
import {Theme} from './../entity/Theme'
import {Game} from './../entity/Game'

export default class connectionManager
{
	async init()
	{
		let connection

		if (!typeorm.getConnectionManager().has('default'))
		{
			connection = await this.createConnection()
		}
		else
		{
			connection = typeorm.getConnectionManager().get('default')
		}

		return connection
	}

	createConnection()
	{
		return typeorm.createConnection({
			name: 'default',
			type: 'sqlite',
			database: './src/data/mydb.sql',
			entities: [
				Public,
				Genre,
				Platform,
				Theme,
				Game,
			],
			synchronize: true
		})
	}

	async getAll(entity)
	{
		let connection = await this.init()
		let model = this.selectEntityModel(entity)

		const entityRepository = typeorm.getRepository(model)

		return entityRepository.createQueryBuilder("query").getMany()
	}

	async getOne(entity, id)
	{
		let connection = await this.init()
		let model = this.selectEntityModel(entity)

		const entityRepository = typeorm.getRepository(model)

		return entityRepository.findOne(id)
	}

	async getAllUsers(entity)
	{
		let connection = await this.init()
		let model = this.selectEntityModel(entity)

		const entityRepository = typeorm.getRepository(model)

		return entityRepository.find({ isActivate: true})
	}

	async getImagePath(entity, id)
	{
		let connection = await this.init()
		let model = this.selectEntityModel('public')
		let repository = typeorm.getRepository(model)
		let imageObj = await repository.findOne(id)

		return imageObj.logo
	}

	async createGame(objet)
	{
		let connection = await this.init()
		let model = this.selectEntityModel('game')
		let repository = typeorm.getRepository(model)

		await repository.save(objet)

		return true
	}

	async setAll(entity, data)
	{
		console.log(entity)


		let connection = await this.init()
		let model = this.selectEntityModel(entity)
		let repository = this.selectEntityRepository(entity)

		for (const [key, value] of Object.entries(data))
		{
			console.log(Object.entries(data))
			console.log(key)
			console.log(value)

			// const queryRunner = connection.createQueryRunner()
			// await queryRunner.connect()
			let object1 = new model()
			object1.name = 'toto'
			object1.identifier = 'gt'
			object1.logo = ''
			object1.isActivate = false

			repository.save(object1)



			// await queryRunner.startTransaction()
			// await queryRunner.manager.save(genre1)
			// await queryRunner.commitTransaction()
			// await queryRunner.release()

			// await typeorm.getManager().transaction(transactionalEntityManager =>
			// {
				// console.log('ICI34')

				// object.name = "dirty public"

				// transactionalEntityManager
				//     .save(object)
				//     .then(object => {
				//         console.log("Object has been saved. Object id is", object.id);
				//     })
			// })
		}
	}

	delete(entity)
	{

	}

	async deleteAllData()
	{
		let connection = await this.init()

		connection.then(connection =>
		{
			connection.createQueryBuilder().delete().from(Public).execute()
			connection.createQueryBuilder().delete().from(Genre).execute()
		})
	}

	async checkItem(object, entity)
	{
		let connection = await this.init()
		let model = this.selectEntityModel(entity)

		const entityRepository = typeorm.getRepository(model)

		if (object.isActivate === true)
		{
			entityRepository.createQueryBuilder().update(model).set({isActivate: false}).where("id = :id", { id: object.id}).execute()
			object.isActivate = false
			return false
		}
		else
		{
			entityRepository.createQueryBuilder().update(model).set({isActivate: true}).where("id = :id", { id: object.id}).execute()
			object.isActivate = true
			return true
		}
	}

	selectEntityRepository(entity)
	{
		let repository

		switch (entity)
		{
			case 'public':
				repository = typeorm.getRepository(Public)
				break
			case 'genre':
				repository = typeorm.getRepository(Genre)
				break
			case 'theme':
				repository = typeorm.getRepository(Theme)
				break
			case 'platform':
				repository = typeorm.getRepository(Platform)
				break
			case 'game':
				repository = typeorm.getRepository(Game)
				break
		}

		return repository
	}

	selectEntityModel(entity)
	{
		let model

		switch (entity)
		{
			case 'public':
				model = Public
				break
			case 'genre':
				model = Genre
				break
			case 'theme':
				model = Theme
				break
			case 'platform':
				model = Platform
				break
			case 'game':
				model = Game
				break
		}

		return model
	}
}
