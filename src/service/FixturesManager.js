import * as fs from 'fs'
import * as typeorm from 'typeorm'
import {Public} from './../entity/Public'
import ConnectionManager from './ConnectionManager'
import JsonTools from './JsonTools'

export default class fixturesManager
{
  constructor (connectionManager)
  {
    this.file = './src/data/data.json'
    this.connectionManager = connectionManager
    this.jsonTools = new JsonTools()
  }

  reloadFixtures ()
  {
    let fixturesFile = fs.readFileSync(this.file, 'utf8')
    let datas = JSON.parse(fixturesFile)
  }

  loadFixtures ()
  {
    console.log('loadFixtures')

    // this.eraseData()

    let data = this.jsonTools.getObjectsToJson(this.file)

    console.log(data[0])

    for (let entity in data[0])
    {
      console.log(entity)
      console.log(data[0][entity])
      this.connectionManager.setAll(entity, data[entity])
    }

    return 1
  }

  eraseData ()
  {
    return this.connectionManager.deleteAllData()
  }
}
